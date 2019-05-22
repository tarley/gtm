import { MessageService } from 'primeng/api';
import { BotaoTabela } from './../gtm-tabela/shared/botao-tabela.model';
import { PacienteService } from './shared/paciente.service';
import { Component, OnInit } from '@angular/core';
import { Paciente } from './shared/paciente.model';
import { MensagemUtil } from 'src/app/util/mensagem-util';
import { NgBlockUI, BlockUI } from 'ng-block-ui';

import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  titulo: string = 'Lista de Pacientes';

  colunas: any[] = [
    { var: 'nome', label: 'Nome' },
    { var: 'sexo', label: 'Sexo' },
    { var: 'cpf', label: 'CPF' },
    { var: 'ativo', label: 'Ativo' }
  ];

  criterioBusca = [
    { label: 'CPF', value: 'CPF' },
    { label: 'Nome', value: 'Nome' }
  ]

  botoes: BotaoTabela[] = [{ nome: 'NovoAtendimento', label: 'Atendimento', icone: 'fa fa-plus' }];

  pacientes: Paciente[] = [];

  rotaEdicao = 'paciente';

  cpf: string;
  nome: string;
  semRetornoPaciente: String;

  tipoBusca = 'CPF';

  constructor(private router: Router, private pacienteService: PacienteService, private messageService: MessageService) { }

  ngOnInit() {
    this.buscarTodos()
  }

  novoPaciente() {
    this.router.navigate(['paciente/novo']);
  }

  novoAtendimento(evento) {
    if (evento.nomeBotao == 'NovoAtendimento') {
      this.router.navigate(['atendimento/novo', evento.idSelecionado]);
    }
  }

  buscarTodos() {
    this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
    this.pacienteService.buscarTodos().subscribe((pacientes: Paciente[]) => {
      this.pacientes = pacientes;
    }, () => {
      this.messageService.add(MensagemUtil.criaMensagemErro(MensagemUtil.ERRO_BUSCAR));
      this.blockUI.stop();
    },
      () => this.blockUI.stop());
  }

  buscarPorCpf() {
    if (this.cpf) {
      this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
      this.pacienteService.buscarPorCpf(this.cpf).subscribe((pacientes: Paciente[]) => {
        if (pacientes.length == 0) {
          this.semRetornoPaciente = "Sua busca nao retornou nenhum paciente."
          this.pacientes = pacientes;
        } else {
          this.pacientes = pacientes;
          this.semRetornoPaciente = null
        }
      }, (respostaErro) => {this.messageService.add(MensagemUtil.criaMensagemErro(respostaErro.error.errors[0].msg))},
      () => this.blockUI.stop());
    } else {
      this.buscarTodos();
      this.semRetornoPaciente = null
    }
  }

  buscarPorNome() {
    if (this.nome) {
      this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
      this.pacienteService.buscarPorNome(this.nome).subscribe((pacientes: Paciente[]) => {
        if (pacientes.length == 0) {
          this.semRetornoPaciente = "Sua busca nao retornou nenhum paciente."
          this.pacientes = pacientes;
        } else {
          this.pacientes = pacientes;
          this.semRetornoPaciente = null
        }
      }, (respostaErro) => {this.messageService.add(MensagemUtil.criaMensagemErro(respostaErro.error.errors[0].msg))},
      () => this.blockUI.stop());      
    } else {
      this.buscarTodos();
      this.semRetornoPaciente = null
    }
  }

  definirBusca() {
    switch (this.tipoBusca) {
      case 'CPF':
        this.buscarPorCpf();
        break;
      case 'Nome':
        this.buscarPorNome();
        break;
      case '':
        this.buscarTodos();
    }
  }

}
