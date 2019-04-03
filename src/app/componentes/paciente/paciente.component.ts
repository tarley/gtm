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
  pacientes: Paciente[] = [
    // {nome: 'Joelma', sexo: 'Feminino', email: 'joelma@email.com',  cpf: 10043718612, data_atendimento: '21/01/1980'},
    // {nome: 'Ximbinha', sexo: 'Masculino', email: 'ximbinha@email.com',  cpf: 10043718612, data_atendimento: '21/01/1994'},
    // {nome: 'Eduardo', email: 'eduardo@email.com', sexo: 'Masculino', cpf: 10043718612, data_atendimento: '21/01/1985'},
    // {nome: 'Henry', email: 'henry@email.com', sexo: 'Masculino', cpf: 10043718612, data_atendimento: '21/01/1982'},
    {nome: 'Joelma', sexo: 'Feminino', cpf: 10043718612},
    
  ];


  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }

}
