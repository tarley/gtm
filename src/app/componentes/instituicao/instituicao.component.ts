import { Component, OnInit } from '@angular/core';
import { Instituicao } from './shared/instituicao.model';
import { Router } from '@angular/router';
import { InstituicaoService } from './shared/instituicao.service';

@Component({
  selector: 'app-instituicao',
  templateUrl: './instituicao.component.html',
  styleUrls: ['./instituicao.component.scss']
})
export class InstituicaoComponent implements OnInit {

  titulo: String = 'Lista de Instituições';
  urlDelete = 'v1/instituicao';

  colunas: any[] = [
    {var: 'descricao', label: 'Descrição'}
  ];
  instituicao: Instituicao[] = [];

  constructor(private router: Router, private instituicaoService: InstituicaoService) { }

  ngOnInit() {
    this.buscarTodos();
  }

  buscarTodos(){
    this.instituicaoService.buscarTodos().subscribe((instituicao: Instituicao[]) => {
      this.instituicao = instituicao;
    })
  }

  navigate(route: String) {
    this.router.navigate([route]);
  }

}
