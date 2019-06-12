import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/componentes/paciente/shared/paciente.model';
import { PacienteService } from 'src/app/componentes/paciente/shared/paciente.service';
import { MessageService } from 'primeng/api';
import { MensagemUtil } from 'src/app/util/mensagem-util';

import { ActivatedRoute } from '@angular/router';
import { AtendimentoService } from '../../atendimento/shared/atendimento.service';
import { Atendimento } from '../../atendimento/shared/atendimento.model';

@Component({
  selector: 'app-paciente-imprimir-paciente',
  templateUrl: './paciente-imprimir-paciente.component.html',
  styleUrls: ['./paciente-imprimir-paciente.component.scss']
})
export class PacienteImprimirPacienteComponent implements OnInit {

  atendimento: Atendimento = new Atendimento();
  paciente: Paciente = new Paciente();

  dataNascimento: Date = new Date();
  retornoAtvFisica: String = null;
  retornoCigarro: String = null;
  retornoBebida: String = null;
  idade: Number = 0;

  constructor(private pacienteService: PacienteService, private messageService: MessageService, 
              private route: ActivatedRoute, private atendimentoService: AtendimentoService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.atendimentoService.buscarPorId(params['id']).subscribe((atendimento: Atendimento) => {
          this.atendimento = atendimento;
          this.dadosPaciente(this.atendimento.idPaciente);
        }, () => this.messageService.add(MensagemUtil.criaMensagemErro('Erro ao buscar atendimento!')))
      }
    })
  }
  
  dadosPaciente(idPaciente: string){
    this.pacienteService.buscarPorId(idPaciente).subscribe((paciente: Paciente) => {
      this.paciente = paciente;
      this.calculaIdadePaciente(paciente.dataNascimento);
      this.formataAtvFisica(paciente.habitosVida.atividadeFisica.pratica);
      this.formataCigarro(paciente.habitosVida.cigarro.fumante);
      this.formataBebida(paciente.habitosVida.bebidaAlcoolica.consome);
    }, () => this.messageService.add(MensagemUtil.criaMensagemErro('Erro ao buscar paciente!')))
  }

  calculaIdadePaciente(dataNascimento: Date){
    this.dataNascimento = new Date(dataNascimento);
    const hoje = new Date();

    console.log(hoje);
    console.log(hoje.getDate());
    console.log(hoje.getMonth()+1);
    console.log(hoje.getFullYear());

    console.log(this.dataNascimento);
    console.log(this.dataNascimento.getDate());
    console.log(this.dataNascimento.getMonth()+1);
    console.log(this.dataNascimento.getFullYear());



    if(hoje.getMonth()+1 <= this.dataNascimento.getMonth()){
      this.idade = hoje.getFullYear() - 1 - this.dataNascimento.getFullYear();
    }else{
      this.idade = hoje.getFullYear() - this.dataNascimento.getFullYear();
    }
    
    
  }

  formataAtvFisica(campo: Boolean){
      if(campo == true){
        this.retornoAtvFisica = 'Sim'; 
      }else{
        this.retornoAtvFisica = 'Não';
      }
  }
  formataCigarro(campo: Boolean){
      if(campo == true){
        this.retornoCigarro = 'Sim'; 
      }else{
        this.retornoCigarro = 'Não';
      }
  }

  formataBebida(campo: Boolean){
      if(campo == true){
        this.retornoBebida = 'Sim'; 
      }else{
        this.retornoBebida = 'Não';
      }
  }

}
