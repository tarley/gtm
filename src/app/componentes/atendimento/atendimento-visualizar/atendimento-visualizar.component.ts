import { MensagemUtil } from 'src/app/util/mensagem-util';
import { AtendimentoService } from './../shared/atendimento.service';
import { Component, OnInit } from '@angular/core';
import { Atendimento, Doenca, PlanoCuidado, Farmacoterapia, Prm } from '../shared/atendimento.model';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { Constantes } from 'src/app/util/constantes';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MessageServiceUtil } from 'src/app/util/message-service-util.service';
import { Paciente } from '../../paciente/shared/paciente.model';
import { PacienteService } from '../../paciente/shared/paciente.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-atendimento-visualizar',
  templateUrl: './atendimento-visualizar.component.html',
  styleUrls: ['./atendimento-visualizar.component.scss']
})
export class AtendimentoVisualizarComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  titulo: string = '';

  atendimento: Atendimento = new Atendimento();

  scf = Constantes.scf;
  configCalendar = Constantes.configCalendar;
  prms = Constantes.prms;

  indexFarmacoSelecionada = 0;


  constructor(private atendimentoService: AtendimentoService, private pacienteService: PacienteService,
    private route: ActivatedRoute, private router: Router, private messageService: MessageServiceUtil) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
        const id = params['id'];
        this.visualizarAtendimento(id);
    })
  }

  visualizarAtendimento(id: string) {
    this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
    this.atendimentoService.buscaPorIdAtendimento(id).subscribe((atendimento: Atendimento) => {
      atendimento.doencas.forEach((doenca: Doenca) => {
        if (!doenca.planoCuidado) {
          doenca.planoCuidado = new PlanoCuidado();
        }
        if(doenca.dataResultado) {
          doenca.dataResultado = new Date(doenca.dataResultado);
        }
        doenca.farmacoterapias.forEach((farmaco: Farmacoterapia) => {
          if (!farmaco.prm) {
            farmaco.prm = new Prm();
          }
        });
      });
      this.atendimento = atendimento;
      this.defineTitulo(atendimento.nomePaciente);
      this.adicionaDoencaEFarmacoInicial();
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

  selecionaObservacaoScf(scfSelecionado: string, doenca: Doenca) {
    Constantes.scf.forEach(scf => {
      if (scf.value == scfSelecionado) {
        doenca.planoCuidado.observacaoScf = scf.descricao;
      }
    });
  }

  defineTitulo(nomePaciente: string) {
    this.titulo = `Visualizar Atendimento - ${nomePaciente} - ${formatDate(this.atendimento.dataAtendimento, 'dd/MM/yyyy', 'pt-BR')}`
  }

  novaDoenca() {
    if (!this.atendimento.doencas) {
      this.atendimento.doencas = new Array<Doenca>();
    }
    this.atendimento.doencas.push(new Doenca());
    this.novaFarmaco(this.atendimento.doencas[this.atendimento.doencas.length - 1]);
  }

  novaFarmaco(doenca: Doenca) {
    if (!doenca.farmacoterapias) {
      doenca.farmacoterapias = [];
    }
    doenca.farmacoterapias.push(new Farmacoterapia());
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
      this.router.navigate(['atendimento']);
  }

}
