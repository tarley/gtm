import { MensagemUtil } from 'src/app/util/mensagem-util';
import { ActivatedRoute, Router } from '@angular/router';
import { AtendimentoService } from './../shared/atendimento.service';
import { Atendimento, Doenca, Farmacoterapia } from './../shared/atendimento.model';
import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../paciente/shared/paciente.service';
import { Paciente } from '../../paciente/shared/paciente.model';
import { NgForm } from '@angular/forms';
import { MessageServiceUtil } from 'src/app/util/message-service-util.service';
import { Constantes } from 'src/app/util/constantes';

@Component({
  selector: 'app-atendimento-novo',
  templateUrl: './atendimento-novo.component.html',
  styleUrls: ['./atendimento-novo.component.scss']
})
export class AtendimentoNovoComponent implements OnInit {

  titulo = 'Novo Atendimento';

  atendimento: Atendimento = new Atendimento();

  scf = Constantes.scf;
  configCalendar = Constantes.configCalendar;
  prms = Constantes.prms;
  causasPrm;

  constructor(private atendimentoService: AtendimentoService, private pacienteService: PacienteService,
    private route: ActivatedRoute, private router: Router, private messageService: MessageServiceUtil) { }

  ngOnInit() {
    this.adicionaDoencaEFarmacoInicial();
    this.route.params.subscribe(params => {
      if (params['idPaciente']) {
        const idPaciente = params['idPaciente'];
        this.buscaUltimoAtendimento(idPaciente);
      } else if (params['id']) {
        const id = params['id'];
      }
    })
  }

  adicionaDoencaEFarmacoInicial() {
    if (this.atendimento.doencas.length = 0) {
      this.novaDoenca();
      this.novaFarmaco(this.atendimento.doencas[0]);
    }
  }

  buscaUltimoAtendimento(idPaciente: string) {
    this.atendimentoService.buscaUltimoAtendimento(idPaciente).subscribe((ultimoAtendimento: Atendimento) => {
      ultimoAtendimento ?
        this.novoAtendimentoComValores(ultimoAtendimento) :
        this.novoAtendimento(idPaciente);
    })
  }

  novoAtendimento(idPaciente: string) {
    this.pacienteService.buscarPorId(idPaciente).subscribe((paciente: Paciente) => {
      this.setAtributosIniciais(paciente);
      this.defineTitulo(paciente.nome);
    })
  }

  novoAtendimentoComValores(ultimoAtendimento: Atendimento) {
    this.atendimento.dataAtendimento = new Date();
    this.atendimento.nomePaciente = ultimoAtendimento.nomePaciente;
    this.atendimento.idPaciente = ultimoAtendimento.idPaciente;
    this.defineTitulo(ultimoAtendimento.nomePaciente);

    if (ultimoAtendimento.quadroGeral) {
      this.atendimento.quadroGeral = ultimoAtendimento.quadroGeral
    }
    if (ultimoAtendimento.planoCuidado) {
      this.atendimento.planoCuidado = ultimoAtendimento.planoCuidado;
    } 
    if (ultimoAtendimento.doencas.length > 0) {
      this.atendimento.doencas = ultimoAtendimento.doencas;
    }
  }

  setAtributosIniciais(paciente: Paciente) {
    this.atendimento.idPaciente = paciente._id;
    this.atendimento.nomePaciente = paciente.nome;
    this.atendimento.dataAtendimento = new Date();
  }

  salvar(form: NgForm) {
    this.atendimentoService.salvar(this.atendimento).subscribe(() => {
      this.messageService.add(MensagemUtil.criaMensagemSucesso(MensagemUtil.REGISTRO_SALVO));
      this.voltar();
    }, (erro) => this.messageService.geraMensagensErro(erro, MensagemUtil.ERRO_SALVAR));
  }

  carregaCausasPrm(prmSelecionada: string) {
    Constantes.prms.forEach(prm => {
      if (prm.value == prmSelecionada) {
        this.causasPrm = prm.causas;
      }
    })
  }

  defineTitulo(nomePaciente: string) {
    this.titulo = `Novo Atendimento - ${nomePaciente}`;
  }

  novaDoenca() {
    if (!this.atendimento.doencas) {
      this.atendimento.doencas = [];
    }
    this.atendimento.doencas.push({ nome: '' })
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
    this.router.navigate(['paciente']);
  }

}
