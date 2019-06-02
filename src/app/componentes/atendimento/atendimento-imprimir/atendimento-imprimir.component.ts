import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { AtendimentoService } from '../shared/atendimento.service';
import { MensagemUtil } from 'src/app/util/mensagem-util';
import { Atendimento } from '../shared/atendimento.model';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MessageService } from 'primeng/api';
 

@Component({
  selector: 'app-atendimento-imprimir',
  templateUrl: './atendimento-imprimir.component.html',
  styleUrls: ['./atendimento-imprimir.component.scss']
})
export class AtendimentoImprimirComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  titulo = 'Imprimir atendimento';
  atendimento: Atendimento = new Atendimento();
  
  isPrimeiroAtendimento: boolean = true;

  constructor(private router: Router, private atendimentoService: AtendimentoService, private route: ActivatedRoute, 
              private messageService: MessageService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.atendimentoService.buscarPorId(params['id']).subscribe((atendimento: Atendimento) => {
          this.atendimento = atendimento;
          this.contaAtendimentos(this.atendimento.idPaciente);
        }, () => this.messageService.add(MensagemUtil.criaMensagemErro('Erro ao buscar atendimento!')))
      }
    })
  }

  contaAtendimentos(idPaciente: string){
    this.atendimentoService.contaAtendimentosPaciente(idPaciente).subscribe((isPrimeiro: boolean)=>{
      this.isPrimeiroAtendimento = isPrimeiro;
    });
  }

  voltar() {
    this.router.navigate(['atendimento']);
  }

  print()
  {
    window.print();
  }

}
