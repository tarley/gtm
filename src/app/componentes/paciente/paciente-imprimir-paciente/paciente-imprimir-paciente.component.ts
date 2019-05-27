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
    }, () => this.messageService.add(MensagemUtil.criaMensagemErro('Erro ao buscar paciente!')))
  }

}
