import { BotaoTabela } from './../gtm-tabela/shared/botao-tabela.model';
import { PacienteService } from './shared/paciente.service';
import { Component, OnInit } from '@angular/core';
import { Paciente } from './shared/paciente.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {

  titulo: string = 'Lista de Pacientes';

  colunas: string[] = ['nome', 'sexo', 'cpf'];
  botoes: BotaoTabela[] = [{nome: 'NovoAtendimento', label: 'Atendimento' , icone: 'fa fa-plus'}];

  pacientes: Paciente[] = [];

  urlDelete = 'v1/pacientes';
  rotaEdicao = 'paciente';

  constructor(private router: Router, private pacienteService: PacienteService) { }

  ngOnInit() {
    this.buscarTodos()
  }

  novoPaciente() {
    this.router.navigate(['paciente/novo']);
  }

  novoAtendimento(evento) {
    if(evento.nomeBotao == 'NovoAtendimento') {
      this.router.navigate(['atendimento/novo', evento.idSelecionado]);
    }
  }

  buscarTodos() {
    this.pacienteService.buscarTodos().subscribe((pacientes: Paciente[]) => {
      this.pacientes = pacientes;
    });
  }

}
