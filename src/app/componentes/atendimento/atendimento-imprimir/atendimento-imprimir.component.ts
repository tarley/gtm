import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atendimento-imprimir',
  templateUrl: './atendimento-imprimir.component.html',
  styleUrls: ['./atendimento-imprimir.component.scss']
})
export class AtendimentoImprimirComponent implements OnInit {

  titulo = 'Imprimir atendimento';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  voltar() {
    this.router.navigate(['atendimento']);
  }

}
