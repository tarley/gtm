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
  pacientes: Paciente[] = [];

  constructor(private router: Router, private pacienteService: PacienteService) { }

  ngOnInit() {
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }

  buscarTodos() {
    this.pacienteService.buscarTodos().subscribe((pacientes: Paciente[]) => {
      this.pacientes = pacientes;
    });
  }

}
