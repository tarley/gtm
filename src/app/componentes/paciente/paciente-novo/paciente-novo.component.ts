import { Constantes } from 'src/app/util/constantes';
import { SelectItem, MessageService } from 'primeng/api';
import { NgForm } from '@angular/forms';
import { Paciente } from './../shared/paciente.model';
import { Component, OnInit } from '@angular/core';
import { PacienteService } from './../shared/paciente.service';
import { ProfissaoService } from '../../profissao/shared/profissao.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MensagemUtil } from 'src/app/util/mensagem-util';
import { Profissao } from '../../profissao/shared/profissao.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-paciente-novo',
  templateUrl: './paciente-novo.component.html',
  styleUrls: ['./paciente-novo.component.scss']
})
export class PacienteNovoComponent implements OnInit {

  titulo = 'Novo Paciente';

  paciente: Paciente = new Paciente()

  profissao: SelectItem[] = []

  sexo: SelectItem[] = Constantes.sexo;

  estadoCivil: SelectItem[] = Constantes.estadoCivil;

  acessoServico: SelectItem[] = Constantes.acessoServico;

  ubs: SelectItem[] = Constantes.ubs;

  atividadeFisica: SelectItem[] = Constantes.atividadeFisica;

  chkCigarroMarcado: Boolean = false;
  chkBebidaMarcado: Boolean = false;

  dataNascimento;



  constructor(private pacienteService: PacienteService, private ProfissaoService: ProfissaoService,
    private router: Router, private messageService: MessageService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.carregarDadosIniciais();
    this.route.params.subscribe(params => {
      if (params['id']) {
        const id = params['id'];
        this.pacienteService.buscarPorId(id).subscribe((paciente: Paciente) => {
          this.paciente = paciente;
          this.chkCigarroMarcado = paciente.habitosVida.cigarro.fumante;
          this.chkBebidaMarcado = paciente.habitosVida.bebidaAlcoolica.consome;
          this.dataNascimento = this.pacienteService.formatarDataLeitura(this.paciente)
        }), (respostaErro) => this.messageService.add(MensagemUtil.criaMensagemErro('Erro ao Buscar Paciente'))
      }
    })
  }

  voltar() {
    this.router.navigate(['paciente']);
  }

  validarCheckBox(opcao, evento) {
    if (opcao == "fumante") {
      if (evento == false) {
        this.chkCigarroMarcado = evento;
      } else {
        this.chkCigarroMarcado = evento;
      }
    } else {
      if (opcao == "bebida" && evento == false) {
        this.chkBebidaMarcado = evento;
      } else {
        this.chkBebidaMarcado = evento;
      }
    }
  }

  salvar() {
    this.pacienteService.validarCamposObservacao(this.paciente, this.chkCigarroMarcado, this.chkBebidaMarcado);
    this.pacienteService.formartarDataGravacao(this.paciente, this.dataNascimento);

    let requisicao: Observable<Object>;
    if (!this.paciente._id) {
      requisicao = this.pacienteService.inserirPaciente(this.paciente);
    } else {
      requisicao = this.pacienteService.atualizaPaciente(this.paciente);
    }
    requisicao.subscribe(() => {
      this.messageService.add(MensagemUtil.criaMensagemSucesso(MensagemUtil.REGISTRO_SALVO));
      this.voltar()
    }, (respostaErro) => this.messageService.add(MensagemUtil.criaMensagemErro(respostaErro.error.errors[0].msg)));
  }

  carregarDadosIniciais() {
    this.ProfissaoService.buscarTodos().subscribe((profissoes: Profissao[]) => {
      profissoes.forEach((p) => {
        this.profissao.push({ label: p.descricao, value: p.descricao });
      })
    });
  }

}
