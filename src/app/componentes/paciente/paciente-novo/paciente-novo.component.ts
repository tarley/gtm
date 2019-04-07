import { SelectItem, MessageService } from 'primeng/api';
import { NgForm } from '@angular/forms';
import { Paciente } from './../shared/paciente.model';
import { Component, OnInit } from '@angular/core';
import { PacienteService } from './../shared/paciente.service';
import { Router } from '@angular/router';
import { MensagemUtil } from 'src/app/util/mensagem-util';

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
    {label: 'Analista de Sistemas', value: 'AnalistaSistemas'},
    {label: 'Enfermeiro(a)', value: 'Enfermeiro'},
    {label: 'Farmacêutico(a)', value: 'farmaceutico'},
    {label: 'Nutricionista', value: 'nutricionista'}
  ]

  ubs: SelectItem[] = [
    {label: 'Centro de Saúde Confisco', value: 'ubsConfisco'},
    {label: 'Centro de Saúde Dom Orione', value: 'ubsDomOrione'},
    {label: 'Centro de Saúde Trevo', value: 'ubsTrevo'},
    {label: 'Centro de Saúde Ouro Preto', value: 'ubsOuroPreto'},

  ]

  acessoServico: SelectItem[] = [
    {label: 'Encaminhamento pela Clínica de Odontologia da Newton', value: 'clincaOdontoNewton'},
    {label: 'Encaminhamento pela Clínica de Fisioterapia da Newton', value: 'clincaFisioterapiaNewton'},
    {label: 'Encaminhamento pela Clínica de Psicologia da Newton', value: 'clincaPsicologiaNewton'},
    {label: 'Encaminhamento pela pela UBS,', value: 'clincaUbs'},
    {label: 'Outro Encaminhamento,', value: 'outroEncaminhamento'},

  ]

  atividadeFisica: SelectItem[] = [
    {label: 'Nenhuma', value: 'nenhuma'},    
    {label: 'Natação', value: 'natacao'},
    {label: 'Corrida', value: 'corrida'},
    {label: 'Musculação', value: 'musculacao'},
    {label: 'Caminhada', value: 'caminhada'}
  ]

  opcaoUso: SelectItem[] = [
    {label: 'Sim', value: 'sim'},
    {label: 'Não', value: 'nao'}
  ]

  constructor(private PacienteService: PacienteService, private router: Router, private messageService: MessageService) { }


  ngOnInit() {
  }

  voltar() {
    this.router.navigate(['paciente']);
  }

  salvar(form: NgForm){
    this.PacienteService.inserirPaciente(form.value).subscribe(() => {
      this.messageService.add(MensagemUtil.criaMensagemSucesso(MensagemUtil.REGISTRO_SALVO));      
      this.voltar()
    }, (respostaErro) => this.messageService.add(MensagemUtil.criaMensagemErro(respostaErro.error.errors[0].msg)) );
  }

}
