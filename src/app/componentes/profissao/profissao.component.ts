import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfissaoService } from './shared/profissao.service';
import { Profissao } from './shared/profissao.model';

@Component({
  selector: 'app-profissao',
  templateUrl: './profissao.component.html',
  styleUrls: ['./profissao.component.scss']
})
export class ProfissaoComponent implements OnInit {

  titulo: String = 'Lista de Profissão';
  urlDelete = 'v1/profissoes';

  colunas: string[] = ['descricao'];
  profissoes: Profissao[] = [];

  constructor(private router: Router, private profissaoService: ProfissaoService) { }

  ngOnInit() {
    this.buscarTodos();
  }

  buscarTodos(){
    this.profissaoService.buscarTodos().subscribe((profissoes: Profissao[]) => {
      this.profissoes = profissoes;
    })
  }

  navigate(route: String) {
    this.router.navigate([route]);
  }

}
