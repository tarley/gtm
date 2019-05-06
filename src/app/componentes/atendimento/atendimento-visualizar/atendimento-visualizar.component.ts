import { MensagemUtil } from 'src/app/util/mensagem-util';
import { AtendimentoService } from './../shared/atendimento.service';
import { Component, OnInit } from '@angular/core';
import { Atendimento, Doenca, PlanoCuidado, Farmacoterapia } from '../shared/atendimento.model';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { Constantes } from 'src/app/util/constantes';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MessageServiceUtil } from 'src/app/util/message-service-util.service';

@Component({
  selector: 'app-atendimento-visualizar',
  templateUrl: './atendimento-visualizar.component.html',
  styleUrls: ['./atendimento-visualizar.component.scss']
})
export class AtendimentoVisualizarComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  titulo: string = '';

  atendimento: Atendimento = new Atendimento();

  configCalendar = Constantes.configCalendar;

  constructor(private route: ActivatedRoute, private atendimentoService: AtendimentoService, private router: Router, private messageService: MessageServiceUtil) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        const id = params['id'];
        this.buscaAtendimento(id);
      }
    })
  }

  buscaAtendimento(id: string) {
    this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
    this.atendimentoService.buscaPorIdAtendimento(id).subscribe((atendimento: Atendimento) => {
      atendimento.doencas.forEach((doenca: Doenca) => {
        if (!doenca.planoCuidado) {
          doenca.planoCuidado = new PlanoCuidado();
        }
      });
      if(atendimento.dataResultado) {
        atendimento.dataResultado = new Date(atendimento.dataResultado);
      }
      this.atendimento = atendimento;
      this.defineTitulo(atendimento);
    }, () => this.messageService.add(MensagemUtil.criaMensagemErro(MensagemUtil.ERRO_BUSCAR)),
        () => this.blockUI.stop());
  }

  defineTitulo(atendimento: Atendimento) {
    this.titulo = `Visualização Atendimento - ${atendimento.nomePaciente} - ${formatDate(atendimento.dataAtendimento, 'dd/MM/yyyy', 'pt-BR')}`;
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
