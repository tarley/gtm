import { MensagemUtil } from './../../util/mensagem-util';
import { MessageService, ConfirmationService } from 'primeng/api';
import { GtmTabelaService } from './gtm-tabela.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gtm-tabela',
  templateUrl: './gtm-tabela.component.html',
  styleUrls: ['./gtm-tabela.component.scss']
})
export class GtmTabelaComponent implements OnInit {

  @Input() colunas: string[] = [];
  @Input() lista: any[] = []

  @Input() urlDelete: string;
  @Input() rotaEdicao: string;

  constructor(private router: Router, private tabelaService: GtmTabelaService, private messageService: MessageService,
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
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

  deletaItemTabela(id: string) {
    const index = this.lista.findIndex(elem => elem._id == id);
    this.lista.splice(index, 1);
  }

  editaItem(id) {
    this.router.navigate([this.rotaEdicao, id]);
  }

}
