import { SelectItem } from 'primeng/api';
import { NgForm } from '@angular/forms';
import { Paciente } from './../shared/paciente.model';
import { Component, OnInit } from '@angular/core';
import { PacienteService } from './../shared/paciente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente-novo',
  templateUrl: './paciente-novo.component.html',
  styleUrls: ['./paciente-novo.component.scss']
})
export class PacienteNovoComponent implements OnInit {

  titulo = 'Novo Paciente';

  form: Paciente;

  sexo: SelectItem[] = [
    {label: 'Masculino', value: 'Masculino'},
    {label: 'Feminino', value: 'Feminino'},
    {label: 'Outro', value: 'Outro'}
  ]

  estadoCivil: SelectItem[] = [
    {label: 'Solteiro(a)', value: 'Solteiro(a)'},
    {label: 'Casado(a)', value: 'Casado(a)'},
    {label: 'Dirvociado(a)', value: 'Dirvociado(a)'},
    {label: 'Viuvo(a)', value: 'Viuvo(a)'},
  ]

  profissao: SelectItem[] = [
    {label: 'Analista de Sistemas', value: 'AnalistaSistemas'}
  ]

  constructor(private PacienteService: PacienteService, private router: Router) { }


  ngOnInit() {
  }

  voltar() {
    this.router.navigate(['paciente']);
  }

  salvar(form: NgForm){
    console.log(form.value)
    this.PacienteService.inserirPaciente(form.value).subscribe(() => {
      this.voltar()
    });
  }

}
