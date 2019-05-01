import { MensagemUtil } from 'src/app/util/mensagem-util';
import { MessageServiceUtil } from './../../util/message-service-util.service';
import { Atendimento } from './shared/atendimento.model';
import { AtendimentoService } from './shared/atendimento.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.scss']
})
export class AtendimentoComponent implements OnInit {

  titulo = 'Lista de Atendimentos';

  colunas: string[] = ['nomePaciente', 'dataAtendimento'];

  atendimentos: Atendimento[] = [];
  rotaImpressao = 'atendimento/imprimir/';

  filtroPesquisa: string;

  constructor(private atendimentoService: AtendimentoService, private messageService: MessageServiceUtil) { }

  ngOnInit() {
    this.buscarTodos();
  }

  buscarTodos() {
    this.atendimentoService.buscarTodos().subscribe((atendimentos: Atendimento[]) => {
      atendimentos.forEach(atendimento => {
        atendimento.dataAtendimento = new Date(atendimento.dataAtendimento);
      })
      this.atendimentos = atendimentos;
    })
  }

  filtraAtendimentos() {
    if (this.filtroPesquisa) {
      if (this.isCpfValido(this.filtroPesquisa)) {
        this.messageService.add(MensagemUtil.criaMensagemErro('Digite um CPF válido!'));
        return;
      }
      this.atendimentoService.buscaPorCPFPaciente(this.filtroPesquisa).subscribe((atendimentos: Atendimento[]) => {
        atendimentos.forEach(atendimento => {
          atendimento.dataAtendimento = new Date(atendimento.dataAtendimento);
        })
        this.atendimentos = atendimentos;
      });
    } else {
      this.buscarTodos();
    }
  }

  isCpfValido(cpf: string) {
    cpf = cpf.replace('.', '').replace('-', '').replace('_', '');
    return cpf.length == 11;
  }

}
