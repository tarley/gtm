import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gtm-tabela',
  templateUrl: './gtm-tabela.component.html',
  styleUrls: ['./gtm-tabela.component.scss']
})
export class GtmTabelaComponent implements OnInit {

  @Input() colunas: string[] = [];
  @Input() lista: any[] = []

  rotaEdicao: string;
  uriDelete: string;

  constructor() { }

  ngOnInit() {
  }

  formataTituloCabecalho(titulo: string) {
    const primeiroCaractere: string = titulo.substring(0, 1);
    return titulo.replace(primeiroCaractere, primeiroCaractere.toUpperCase());
  }

}
