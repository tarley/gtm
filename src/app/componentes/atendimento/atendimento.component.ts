import { Atendimento } from './shared/atendimento.model';
import { AtendimentoService } from './shared/atendimento.service';
import { Paciente } from './../paciente/shared/paciente.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.scss']
})
export class AtendimentoComponent implements OnInit {

  titulo = 'Lista de Atendimentos';

  colunas: string[] = ['dataAtendimento', 'nomePaciente'];

  atendimentos: Atendimento[] = [];

  constructor(private atendimentoService: AtendimentoService) { }

  ngOnInit() {
    this.buscarTodos();
  }

  buscarTodos() {
    this.atendimentoService.buscarTodos().subscribe((atendimentos: Atendimento[]) => {
      this.atendimentos = atendimentos;
    })
  }

}
