import { BotaoTabela } from './shared/botao-tabela.model';
import { MensagemUtil } from './../../util/mensagem-util';
import { ConfirmationService } from 'primeng/api';
import { GtmTabelaService } from './gtm-tabela.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MessageServiceUtil } from 'src/app/util/message-service-util.service';

@Component({
  selector: 'app-gtm-tabela',
  templateUrl: './gtm-tabela.component.html',
  styleUrls: ['./gtm-tabela.component.scss']
})
export class GtmTabelaComponent implements OnInit {

  @Input() colunas: any[] = [];
  @Input() lista: any[] = [];

  @Input() urlDelete: string;
  @Input() rotaEdicao: string;
  @Input() rotaImpressao: string;

  @Input() botoes: BotaoTabela[];
  @Output() clickBotaoEvent = new EventEmitter<any>();
  
  existeEdicao: boolean = false;
  existeDelete: boolean = false;
  existeImpressao: boolean = false;

  constructor(private router: Router, private tabelaService: GtmTabelaService, private messageService: MessageServiceUtil,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.isExisteAcao();
  }

  formataTituloCabecalho(titulo: string) {
    const primeiroCaractere: string = titulo.substring(0, 1);
    return titulo.replace(primeiroCaractere, primeiroCaractere.toUpperCase());
  }

  deletaItem(id: string) {
    this.confirmationService.confirm({
      message: MensagemUtil.CONFIRMA_EXCLUIR_REGISTRO,
      accept: () => {
        this.tabelaService.deletaItem(this.urlDelete, id).subscribe(() => {
          this.messageService.add(MensagemUtil.criaMensagemSucesso(MensagemUtil.EXCLUIR_SUCESSO));
          this.deletaItemTabela(id);
        }, () => this.messageService.add(MensagemUtil.criaMensagemErro(MensagemUtil.EXCLUIR_ERRO)));
      }
    });
  }

  clickBotao(botao: BotaoTabela, id: string) {
    this.clickBotaoEvent.emit({
      nomeBotao: botao.nome,
      idSelecionado: id
    });
  }



  isExisteAcao() {
    if (this.urlDelete) {
      this.existeDelete = true;
    }
    if (this.rotaEdicao) {
      this.existeEdicao = true;
    }
    if (this.rotaImpressao) {
      this.existeImpressao = true;
    }
  }

  isDate(valor) {
    if(valor instanceof Date) {
      return true;
    } else {
      return false;
    }
  }

  deletaItemTabela(id: string) {
    const index = this.lista.findIndex(elem => elem._id == id);
    this.lista.splice(index, 1);
  }

  editaItem(id) {
    this.router.navigate([this.rotaEdicao, id]);
  }

  imprimeItem(id: string) {
    this.router.navigate([this.rotaImpressao, id]);
  }
}
