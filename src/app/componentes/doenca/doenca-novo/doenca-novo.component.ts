import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doenca-novo',
  templateUrl: './doenca-novo.component.html',
  styleUrls: ['./doenca-novo.component.scss']
})
export class DoencaNovoComponent implements OnInit {

  titulo: String = 'Nova Doença';

  caminho: String = 'v1/doencas/';

  rotaRetorno: String = 'doenca';
  constructor() { }

  ngOnInit() {
  }

}
