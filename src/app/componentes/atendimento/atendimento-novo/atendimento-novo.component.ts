import { MensagemUtil } from 'src/app/util/mensagem-util';
import { ActivatedRoute, Router } from '@angular/router';
import { AtendimentoService } from './../shared/atendimento.service';
import { Atendimento, Doenca, Farmacoterapia, PlanoCuidado, Prm } from './../shared/atendimento.model';
import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';
import { PacienteService } from '../../paciente/shared/paciente.service';
import { Paciente } from '../../paciente/shared/paciente.model';
import { NgForm } from '@angular/forms';
import { MessageServiceUtil } from 'src/app/util/message-service-util.service';
import { Constantes } from 'src/app/util/constantes';
import { formatDate } from '@angular/common';
import { Observable } from 'rxjs';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-atendimento-novo',
  templateUrl: './atendimento-novo.component.html',
  styleUrls: ['./atendimento-novo.component.scss']
})
export class AtendimentoNovoComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  titulo: string = '';

  atendimento: Atendimento = new Atendimento();

  scf = Constantes.scf;
  configCalendar = Constantes.configCalendar;
  prms = Constantes.prms;
  resolvidoPrm = Constantes.resolvidoPrm;
  causasPrm;

  isEdicao: boolean;

  doencaSelecionada = [
    {
    indiceDoencaSelecionada: 0,
    indiceFarmacoSelecionada: 0,
    }
  ]

  constructor(private atendimentoService: AtendimentoService, private pacienteService: PacienteService,
    private route: ActivatedRoute, private router: Router, private messageService: MessageServiceUtil) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['idPaciente']) {
        const idPaciente = params['idPaciente'];
        this.isEdicao = false;
        this.buscaUltimoAtendimento(idPaciente);
      } else if (params['id']) {
        const id = params['id'];
        this.isEdicao = true;
        this.editarAtendimento(id);
      }
    })
  }

  editarAtendimento(id: string) {
    this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
    this.atendimentoService.buscaPorIdAtendimento(id).subscribe((atendimento: Atendimento) => {
      atendimento.doencas.forEach((doenca: Doenca) => {
        if (!doenca.planoCuidado) {
          doenca.planoCuidado = new PlanoCuidado();
        }
        doenca.farmacoterapias.forEach((farmaco: Farmacoterapia) => {
          if (!farmaco.prm) {
            farmaco.prm = new Prm();
          }
        });
      });
      if (atendimento.dataResultado) {
        atendimento.dataResultado = new Date(atendimento.dataResultado);
      }
      this.atendimento = atendimento;
      this.defineTitulo(atendimento.nomePaciente);
      this.adicionaDoencaEFarmacoInicial();
      this.carregaCausasPrm();
    }, () => {
      this.messageService.add(MensagemUtil.criaMensagemErro(MensagemUtil.ERRO_BUSCAR));
      this.blockUI.stop();
    },
      () => this.blockUI.stop());
  }

  adicionaDoencaEFarmacoInicial() {
    if (this.atendimento.doencas.length == 0) {
      this.novaDoenca();
    }
  }

  buscaUltimoAtendimento(idPaciente: string) {
    this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
    this.atendimentoService.buscaUltimoAtendimento(idPaciente).subscribe((ultimoAtendimento: Atendimento) => {
      this.carregaCausasPrm();
      ultimoAtendimento ?
        this.novoAtendimentoComValores(ultimoAtendimento) :
        this.novoAtendimento(idPaciente);
    }, () => {
      this.messageService.add(MensagemUtil.criaMensagemErro(MensagemUtil.ERRO_BUSCAR));
      this.blockUI.stop();
    },
      () => this.blockUI.stop());
  }

  novoAtendimento(idPaciente: string) {
    this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
    this.pacienteService.buscarPorId(idPaciente).subscribe((paciente: Paciente) => {
      this.setAtributosIniciais(paciente);
      this.defineTitulo(paciente.nome);
      this.adicionaDoencaEFarmacoInicial();
    }, () => {
      this.messageService.add(MensagemUtil.criaMensagemErro(MensagemUtil.ERRO_BUSCAR));
      this.blockUI.stop();
    },
      () => this.blockUI.stop())
  }

  novoAtendimentoComValores(ultimoAtendimento: Atendimento) {
    this.atendimento.dataAtendimento = new Date();
    this.atendimento.nomePaciente = ultimoAtendimento.nomePaciente;
    this.atendimento.idPaciente = ultimoAtendimento.idPaciente;

    if (ultimoAtendimento.quadroGeral) {
      this.atendimento.quadroGeral = ultimoAtendimento.quadroGeral
    }

    if (ultimoAtendimento.doencas.length > 0) {
      this.atendimento.doencas = ultimoAtendimento.doencas;
    }

    ultimoAtendimento.doencas.forEach((doenca: Doenca) => {
      if (!doenca.planoCuidado) {
        doenca.planoCuidado = new PlanoCuidado();
      }
      doenca.farmacoterapias.forEach((farmaco: Farmacoterapia) => {
        if (!farmaco.prm) {
          farmaco.prm = new Prm();
        }
      });
    });

    this.defineTitulo(ultimoAtendimento.nomePaciente);
    this.adicionaDoencaEFarmacoInicial();
  }

  setAtributosIniciais(paciente: Paciente) {
    this.atendimento.idPaciente = paciente._id;
    this.atendimento.nomePaciente = paciente.nome;
    this.atendimento.dataAtendimento = new Date();
  }

  salvar() {
    let requisicao: Observable<Object>;
    if (this.atendimento._id) {
      requisicao = this.atendimentoService.editar(this.atendimento);
    } else {
      requisicao = this.atendimentoService.salvar(this.atendimento);
    }
    this.blockUI.start(MensagemUtil.SALVANDO_REGISTRO);
    requisicao.subscribe(() => {
      this.messageService.add(MensagemUtil.criaMensagemSucesso(MensagemUtil.REGISTRO_SALVO));
      this.voltar();
    }, (erro) => {
      this.messageService.geraMensagensErro(erro, MensagemUtil.ERRO_SALVAR);
      this.blockUI.stop();
    }, () => this.blockUI.stop());
  }

  selecionaDoenca(indiceDoencaSelecionada: number) {
  }

  selecionaFarmaco(indiceDoencaSelecionada: number, indiceFarmacoSelecionada: number) {
  }

  carregaCausasPrm() {
    const prmSelecionada: string = this.atendimento.doencas[this.doencaSelecionada[0].indiceDoencaSelecionada]
            .farmacoterapias[this.doencaSelecionada[0].indiceFarmacoSelecionada].prm.prm;
    Constantes.prms.forEach(prm => {
      if (prm.value == prmSelecionada) {
        this.causasPrm = prm.causas;
      }
    })
  }

  selecionaObservacaoScf(scfSelecionado: string, doenca: Doenca) {
    Constantes.scf.forEach(scf => {
      if (scf.value == scfSelecionado) {
        doenca.planoCuidado.observacaoScf = scf.descricao;
      }
    });
  }

  defineTitulo(nomePaciente: string) {
    this.titulo = this.isEdicao ? 'Edição Atendimento' : 'Novo Atendimento'
    this.titulo = this.titulo.concat(` - ${nomePaciente} - ${formatDate(this.atendimento.dataAtendimento, 'dd/MM/yyyy', 'pt-BR')}`);
  }

  novaDoenca() {
    if (!this.atendimento.doencas) {
      this.atendimento.doencas = new Array<Doenca>();
    }
    this.atendimento.doencas.push(new Doenca());
    this.novaFarmaco(this.atendimento.doencas[this.atendimento.doencas.length - 1]);
  }

  deletaDoenca(indexDeletado: number) {
    this.atendimento.doencas.splice(indexDeletado, 1);
  }

  novaFarmaco(doenca: Doenca) {
    if (!doenca.farmacoterapias) {
      doenca.farmacoterapias = [];
    }
    doenca.farmacoterapias.push(new Farmacoterapia());
  }

  deletaFarmaco(doenca: Doenca, indexDeletado: number) {
    doenca.farmacoterapias.splice(indexDeletado, 1);
  }

  formataTituloDoenca(doenca: Doenca) {
    if (doenca.nome) {
      return this.validaTamanhoMaximo(doenca.nome, 12);
    } else {
      return 'Nova Doença';
    }
  }

  formataTituloFarmaco(farmaco: Farmacoterapia) {
    if (farmaco.medicamento) {
      return this.validaTamanhoMaximo(farmaco.medicamento, 12);
    } else {
      return 'Nova Farmaco'
    }
  }

  validaTamanhoMaximo(campo: string, max: number) {
    if (campo.length > max) {
      return campo.substr(0, max).concat('...');
    } else {
      return campo;
    }
  }

  voltar() {
    this.isEdicao ?
      this.router.navigate(['atendimento']) :
      this.router.navigate(['paciente']);
  }

}
