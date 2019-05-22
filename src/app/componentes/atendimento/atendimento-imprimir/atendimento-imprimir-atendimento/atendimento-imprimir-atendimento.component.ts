import { Component, OnInit } from '@angular/core';
import { AtendimentoService } from '../../shared/atendimento.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Atendimento } from '../../shared/atendimento.model';
import { MensagemUtil } from 'src/app/util/mensagem-util';

@Component({
  selector: 'app-atendimento-imprimir-atendimento',
  templateUrl: './atendimento-imprimir-atendimento.component.html',
  styleUrls: ['./atendimento-imprimir-atendimento.component.scss']
})
export class AtendimentoImprimirAtendimentoComponent implements OnInit {

  atendimento: Atendimento = new Atendimento();

  constructor(private route: ActivatedRoute, private atendimentoService: AtendimentoService, 
              private messageService: MessageService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.atendimentoService.buscarPorId(params['id']).subscribe((atendimento: Atendimento) => {
          this.atendimento = atendimento;
        }, () => this.messageService.add(MensagemUtil.criaMensagemErro('Erro ao buscar atendimento!')))
      }
    })
  }

}
