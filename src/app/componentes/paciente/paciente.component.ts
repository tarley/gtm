import { MessageService } from 'primeng/api';
import { BotaoTabela } from './../gtm-tabela/shared/botao-tabela.model';
import { PacienteService } from './shared/paciente.service';
import { Component, OnInit } from '@angular/core';
import { Paciente } from './shared/paciente.model';
import { MensagemUtil } from 'src/app/util/mensagem-util';

import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {

  titulo: string = 'Lista de Pacientes';

  colunas: any[] = [
    { var: 'nome', label: 'Nome' },
    { var: 'sexo', label: 'Sexo' },
    { var: 'cpf', label: 'CPF' },
    { var: 'ativo', label: 'Status' }
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
    this.pacienteService.buscarTodos().subscribe((pacientes: Paciente[]) => {
      this.pacientes = pacientes;
    });
  }

  buscarPorCpf() {
    if (this.cpf) {
      this.pacienteService.buscarPorCpf(this.cpf).subscribe((pacientes: Paciente[]) => {
        if (pacientes.length == 0) {
          this.semRetornoPaciente = "Sua busca nao retornou nenhum paciente."
          this.pacientes = pacientes;
        } else {
          this.pacientes = pacientes;
          this.semRetornoPaciente = null
        }
      }, (respostaErro) => this.messageService.add(MensagemUtil.criaMensagemErro(respostaErro.error.errors[0].msg)));
    } else {
      this.buscarTodos();
      this.semRetornoPaciente = null
    }
  }

  buscarPorNome() {
    if (this.nome) {
      this.pacienteService.buscarPorNome(this.nome).subscribe((pacientes: Paciente[]) => {
        if (pacientes.length == 0) {
          this.semRetornoPaciente = "Sua busca nao retornou nenhum paciente."
          this.pacientes = pacientes;
        } else {
          this.pacientes = pacientes;
          this.semRetornoPaciente = null
        }
      }, (respostaErro) => this.messageService.add(MensagemUtil.criaMensagemErro(respostaErro.error.errors[0].msg)));
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
