import { ConfirmationService } from 'primeng/api';
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
    {nome: 'finalizar', label: 'Finalizar', icone: 'fa fa-check-circle', varControlaVisualizacao: 'finalizado'},
    {nome: 'visualizar', icone: 'fa fa-eye'},
    {nome: 'editar', icone: 'fa fa-pencil', varControlaVisualizacao: 'finalizado'},
  ]

  atendimentos: Atendimento[] = [];

  rotaImpressao: string = 'atendimento/imprimir/';

  filtroPesquisa: string;

  constructor(private atendimentoService: AtendimentoService, private messageService: MessageServiceUtil, 
    private router: Router, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.buscarTodos();
  }

  buscarTodos() {
    this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
    this.atendimentoService.buscarTodos().subscribe((atendimentos: Atendimento[]) => {
      atendimentos.forEach(atendimento => {
        atendimento.dataAtendimento = new Date(atendimento.dataAtendimento);
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
    } else if(evento.nomeBotao == 'editar') {
      this.router.navigate(['atendimento', evento.idSelecionado]);
    } else if(evento.nomeBotao == 'finalizar') {
      this.confirmationService.confirm({
        message: MensagemUtil.CONFIRMA_FINALIZAR_ATENDIMENTO,
        accept: () => {
          this.blockUI.start(MensagemUtil.FINALIZANDO_ATENDIMENTO);
          this.atendimentoService.finalizarAtendimento(evento.idSelecionado).subscribe(() => {
            this.messageService.add(MensagemUtil.criaMensagemSucesso(MensagemUtil.ATENDIMENTO_FINALIZADO));
            this.blockUI.stop();
          }, (erro) => {
            this.messageService.geraMensagensErro(erro, MensagemUtil.ERRO_FINALIZAR_ATENDIMENTO);
            this.blockUI.stop();
          })
        }
      })
    }
  }

}
