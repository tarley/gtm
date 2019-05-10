import { Component, OnInit } from '@angular/core';
import { Doenca } from './shared/doenca.model';
import { Router } from '@angular/router';
import { DoencaService } from './shared/doenca.service';

@Component({
  selector: 'app-doenca',
  templateUrl: './doenca.component.html',
  styleUrls: ['./doenca.component.scss']
})
export class DoencaComponent implements OnInit {

  titulo: String = 'Lista de Doenças';

  urlDelete: String = 'v1/doencas';

  colunas: any [] = [{
    var: 'descricao', label: 'Descrição'
  }];
  doenca: Doenca [] = [];

  constructor(private router: Router, private doencaService: DoencaService) { }

  ngOnInit() {
    this.buscarTodos();
  }

  buscarTodos(){
    this.doencaService.buscarTodos().subscribe((doenca: Doenca[]) => {
      this.doenca = doenca;
    })
  }


}
