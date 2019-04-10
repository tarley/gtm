import { SelectItem, MessageService } from 'primeng/api';
import { NgForm } from '@angular/forms';
import { Paciente, DadosComplementares, HabitosVida, Cigarro, BebidaAlcoolica } from './../shared/paciente.model';
import { Component, OnInit } from '@angular/core';
import { PacienteService } from './../shared/paciente.service';
import { ProfissaoService } from '../../profissao/shared/profissao.service';
import { Router } from '@angular/router';
import { MensagemUtil } from 'src/app/util/mensagem-util';
import { Profissao } from '../../profissao/shared/profissao.model';

@Component({
  selector: 'app-paciente-novo',
  templateUrl: './paciente-novo.component.html',
  styleUrls: ['./paciente-novo.component.scss']
})
export class PacienteNovoComponent implements OnInit {

  titulo = 'Novo Paciente';

  form: Paciente = {
    dadosComplementares: {},
    habitosVida: {}
  }

  profissao: SelectItem[] = []

  sexo: SelectItem[] = [
    {label: 'Masculino', value: 'Masculino'},
    {label: 'Feminino', value: 'Feminino'},
    {label: 'Outro', value: 'Outro'}
  ]

  estadoCivil: SelectItem[] = [
    {label: 'Solteiro(a)', value: 'Solteiro(a)'},
    {label: 'Casado(a)', value: 'Casado(a)'},
    {label: 'Dirvociado(a)', value: 'Dirvociado(a)'},
    {label: 'Viuvo(a)', value: 'Viuvo(a)'},
  ]

  ubs: SelectItem[] = [
    {label: 'Centro de Saúde Confisco', value: 'ubsConfisco'},
    {label: 'Centro de Saúde Dom Orione', value: 'ubsDomOrione'},
    {label: 'Centro de Saúde Trevo', value: 'ubsTrevo'},
    {label: 'Centro de Saúde Ouro Preto', value: 'ubsOuroPreto'},
  ]

  acessoServico: SelectItem[] = [
    {label: 'Encaminhamento pela Clínica de Odontologia da Newton', value: 'clincaOdontoNewton'},
    {label: 'Encaminhamento pela Clínica de Fisioterapia da Newton', value: 'clincaFisioterapiaNewton'},
    {label: 'Encaminhamento pela Clínica de Psicologia da Newton', value: 'clincaPsicologiaNewton'},
    {label: 'Encaminhamento pela pela UBS,', value: 'clincaUbs'},
    {label: 'Outro Encaminhamento,', value: 'outroEncaminhamento'},
  ]

  atividadeFisica: SelectItem[] = [
    {label: 'Nenhuma', value: 'nenhuma'},    
    {label: 'Natação', value: 'natacao'},
    {label: 'Corrida', value: 'corrida'},
    {label: 'Musculação', value: 'musculacao'},
    {label: 'Caminhada', value: 'caminhada'}
  ]

  opcaoUso: SelectItem[] = [
    {label: 'Sim', value: 'sim'},
    {label: 'Não', value: 'nao'}
  ]

  constructor(private PacienteService: PacienteService, private ProfissaoService: ProfissaoService, private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.carregarDadosIniciais();
  }

  voltar() {
    this.router.navigate(['paciente']);
  }

  salvar(form: NgForm){
    this.PacienteService.inserirPaciente(form.value).subscribe(() => {
      this.messageService.add(MensagemUtil.criaMensagemSucesso(MensagemUtil.REGISTRO_SALVO));      
      this.voltar()
    }, (respostaErro) => this.messageService.add(MensagemUtil.criaMensagemErro(respostaErro.error.errors[0].msg)) );
  }

  carregarDadosIniciais(){
    this.ProfissaoService.buscarTodos().subscribe((profissoes: Profissao[]) => {
      profissoes.forEach((p) => {
        this.profissao.push({label: p.descricao, value: p.descricao});
      })
    });
  }

}
