import { MensagemUtil } from 'src/app/util/mensagem-util';
import { ActivatedRoute, Router } from '@angular/router';
import { AtendimentoService } from './../shared/atendimento.service';
import { Atendimento } from './../shared/atendimento.model';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-atendimento-imprimir',
  templateUrl: './atendimento-imprimir.component.html',
  styleUrls: ['./atendimento-imprimir.component.scss']
})
export class AtendimentoImprimirComponent implements OnInit {

  titulo = 'Imprimir atendimento';

  atendimento: Atendimento = new Atendimento();

  constructor(private router: Router, private route: ActivatedRoute, private atendimentoService: AtendimentoService, private messageService: MessageService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.atendimentoService.buscarPorId(params['id']).subscribe((atendimento: Atendimento) => {
          this.atendimento = atendimento;
        }, () => this.messageService.add(MensagemUtil.criaMensagemErro('Erro ao buscar atendimento!')))
      }
    })
  }


  voltar() {
    this.router.navigate(['atendimento']);
  }

}