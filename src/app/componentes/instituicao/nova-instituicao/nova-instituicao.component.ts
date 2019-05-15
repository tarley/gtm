import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-instituicao',
  templateUrl: './nova-instituicao.component.html',
  styleUrls: ['./nova-instituicao.component.scss']
})
export class NovaInstituicaoComponent implements OnInit {

  titulo: String = 'Nova Instituição';

  caminho: String = 'v1/instituicao/';

  rotaRetorno: String = 'instituicao';
  
  constructor() { }

  ngOnInit() {
  }

}
