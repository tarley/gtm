import { MensagemUtil } from 'src/app/util/mensagem-util';
import { ActivatedRoute, Router } from '@angular/router';
import { AtendimentoService } from './../shared/atendimento.service';
import { Atendimento } from './../shared/atendimento.model';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Paciente } from '../../paciente/shared/paciente.model';
import { PacienteService } from '../../paciente/shared/paciente.service';

@Component({
  selector: 'app-atendimento-imprimir',
  templateUrl: './atendimento-imprimir.component.html',
  styleUrls: ['./atendimento-imprimir.component.scss']
})
export class AtendimentoImprimirComponent implements OnInit {

  titulo = 'Imprimir atendimento';

  atendimento: Atendimento = new Atendimento();
  paciente: Paciente = new Paciente();

  constructor(private router: Router, private route: ActivatedRoute, private pacienteService: PacienteService,
              private atendimentoService: AtendimentoService, private messageService: MessageService) { }

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


  voltar() {
    this.router.navigate(['atendimento']);
  }

}
