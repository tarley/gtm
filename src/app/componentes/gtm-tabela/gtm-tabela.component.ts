import { MensagemUtil } from './../../util/mensagem-util';
import { MessageService } from 'primeng/api';
import { GtmTabelaService } from './gtm-tabela.service';
import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private router: Router, private tabelaService: GtmTabelaService, private messageService: MessageService) { }

  ngOnInit() {
  }

  formataTituloCabecalho(titulo: string) {
    const primeiroCaractere: string = titulo.substring(0, 1);
    return titulo.replace(primeiroCaractere, primeiroCaractere.toUpperCase());
  }

  deletaItem(id: string) {
    //Add msg confirmacao
    this.tabelaService.deletaItem(this.urlDelete, id).subscribe((resposta) => {
      console.log(resposta)
      this.messageService.add(MensagemUtil.criaMensagemSucesso(MensagemUtil.EXCLUIR_SUCESSO))
    }, () => this.messageService.add(MensagemUtil.criaMensagemErro(MensagemUtil.EXCLUIR_ERRO)));
  }

  editaItem(id) {
    this.router.navigate([this.rotaEdicao, id]);
  }

}
