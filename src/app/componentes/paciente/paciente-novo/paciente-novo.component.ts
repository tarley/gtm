import { SelectItem } from 'primeng/api';
import { NgForm } from '@angular/forms';
import { Paciente } from './../shared/paciente.model';
import { Component, OnInit } from '@angular/core';
import { PacienteService } from './../shared/paciente.service';

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

  constructor(private PacienteService: PacienteService) { }

  salvar(form: NgForm){
    console.log(form.value)
    this.PacienteService.inserirPaciente(form.value).subscribe();
  }

  ngOnInit() {
  }

}
