import { NgBlockUI, BlockUI  } from 'ng-block-ui';
import { MensagemUtil } from 'src/app/util/mensagem-util';
import { MessageServiceUtil } from './../../util/message-service-util.service';
import { Atendimento } from './shared/atendimento.model';
import { AtendimentoService } from './shared/atendimento.service';
import { Component, OnInit } from '@angular/core';
import { BotaoTabela } from '../gtm-tabela/shared/botao-tabela.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.scss']
})
export class AtendimentoComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  titulo = 'Lista de Atendimentos';

  colunas: any[] = [
    {var: 'nomePaciente', label: 'Nome'}, 
    {var: 'dataAtendimento', label: 'Data Atendimento'},
    {var: 'finalizado', label: 'Finalizado'},
  ];

  botoes: BotaoTabela[] = [
    {nome: 'visualizar', icone: 'fa fa-eye'},
  ]

  atendimentos: Atendimento[] = [];

  rotaImpressao: string = 'atendimento/imprimir/';
  rotaEdicao: string = 'atendimento';

  filtroPesquisa: string;

  constructor(private atendimentoService: AtendimentoService, private messageService: MessageServiceUtil, private router: Router) { }

  ngOnInit() {
    this.buscarTodos();
  }

  buscarTodos() {
    this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
    this.atendimentoService.buscarTodos().subscribe((atendimentos: Atendimento[]) => {
      atendimentos.forEach(atendimento => {
        atendimento.dataAtendimento = new Date(atendimento.dataAtendimento);
        atendimento.finalizado = new Boolean(atendimento.finalizado);
      })
      this.atendimentos = atendimentos;
    }, () => {
          this.messageService.add(MensagemUtil.criaMensagemErro(MensagemUtil.ERRO_BUSCAR));
          this.blockUI.stop();
        }, 
      () => this.blockUI.stop());
  }

  filtraAtendimentos() {
    if (this.filtroPesquisa) {
      if (this.isCpfValido(this.filtroPesquisa)) {
        this.messageService.add(MensagemUtil.criaMensagemErro('Digite um CPF válido!'));
        return;
      }
      this.blockUI.start(MensagemUtil.FILTRANDO_REGISTRO);
      this.atendimentoService.buscaPorCPFPaciente(this.filtroPesquisa).subscribe((atendimentos: Atendimento[]) => {
        atendimentos.forEach(atendimento => {
          atendimento.dataAtendimento = new Date(atendimento.dataAtendimento);
        })
        this.atendimentos = atendimentos;
      }, () => {
          this.messageService.add(MensagemUtil.criaMensagemErro(MensagemUtil.ERRO_FILTRAR));
          this.blockUI.stop();
        },
          () => this.blockUI.stop());
    } else {
      this.buscarTodos();
    }
  }

  isCpfValido(cpf: string) {
    cpf = cpf.replace('.', '').replace('-', '').replace('_', '');
    return cpf.length == 11;
  }

  clickBotao(evento) {
    if(evento.nomeBotao == 'visualizar') {
      this.router.navigate(['atendimento/visualizar', evento.idSelecionado]);
    }
  }

}
