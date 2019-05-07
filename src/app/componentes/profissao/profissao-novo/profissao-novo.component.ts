import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-medicamento-novo',
  templateUrl: './profissao-novo.component.html',
  styleUrls: ['./profissao-novo.component.scss']
})
export class ProfissaoNovoComponent implements OnInit {

titulo: String = 'Nova Profissão';

caminho: String = 'v1/profissoes';

rotaRetorno: String = 'profissao';

  constructor() { }

  ngOnInit() {
  }

}
