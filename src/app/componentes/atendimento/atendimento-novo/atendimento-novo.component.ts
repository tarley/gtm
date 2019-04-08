import { ActivatedRoute } from '@angular/router';
import { AtendimentoService } from './../shared/atendimento.service';
import { Atendimento, Doenca, Farmacoterapia, PRM, SCF } from './../shared/atendimento.model';
import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../paciente/shared/paciente.service';
import { Paciente } from '../../paciente/shared/paciente.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-atendimento-novo',
  templateUrl: './atendimento-novo.component.html',
  styleUrls: ['./atendimento-novo.component.scss']
})
export class AtendimentoNovoComponent implements OnInit {

  titulo = 'Novo Atendimento';
  
  atendimento: Atendimento = {
    doencas: [{nome: '', farmacoterapias: [{medicamento: ''}]}]

  }
  // {
    // doencas: [
    //   {nome: 'Diabetes', farmacoterapias: [
    //     {medicamento: 'Insulina'},
    //     {medicamento: 'Medicamento 2'},
    //   ]},
    //   {nome: 'Tosse', farmacoterapias: [
    //     {medicamento: 'Xarope'},
    //     {medicamento: 'Medicamento 2'},
    //   ]},
    //   {nome: 'Gripe', farmacoterapias: [
    //     {medicamento: 'Naldecon'},
    //     {medicamento: 'Medicamento 2'},
    //   ]},
    // ]
  // };

  paciente: Paciente;

  prms = PRM.prms;
  causasPrm;

  scf = SCF.scf;

  constructor(private atendimentoService: AtendimentoService, private pacienteService: PacienteService,
      private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['id']) {
        const id = params['id'];
        this.buscaPaciente(id);
      }
    })
  }

  buscaPaciente(id: string) {
    this.pacienteService.buscarPorId(id).subscribe((paciente: Paciente) => {
      this.paciente = paciente;
      this.atendimento.idPaciente = paciente._id;
      this.defineTitulo(paciente.nome);
    })
  }

  salvar(form: NgForm) {

  }

  defineTitulo(nomePaciente: string) {
    this.titulo = `Novo Atendimento - ${nomePaciente}`;
  }

  novaDoenca() {
    if(!this.atendimento.doencas) {
      this.atendimento.doencas = [];
    }  
    this.atendimento.doencas.push({nome: ''})
  }

  novaFarmaco(doenca: Doenca) {
    if(!doenca.farmacoterapias) {
      doenca.farmacoterapias = [];
    } 
    doenca.farmacoterapias.push(new Farmacoterapia());
  }

  formataTituloDoenca(doenca: Doenca) {
    if(doenca.nome) {
      return this.validaTamanhoMaximo(doenca.nome, 9);
    } else {
      return 'Nova Doença';
    }
  }

  formataTituloFarmaco(farmaco: Farmacoterapia) {
    if(farmaco.medicamento) {
      return this.validaTamanhoMaximo(farmaco.medicamento, 9); 
    } else {
      return 'Nova Farmaco'
    }
  }

  validaTamanhoMaximo(campo: string, max: number) {
    if(campo.length > max) {
      return campo.substr(0, max).concat('...');
    } else {
      return campo;
    }
  }

}
