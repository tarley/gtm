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
          this.dataNascimento = this.formatarDataLeitura(this.paciente);
        }), (respostaErro) => this.messageService.add(MensagemUtil.criaMensagemErro('Erro ao Buscar Paciente'))
      }
    })
  }

  salvar() {
    this.validarCamposObservacao(this.chkCigarroMarcado, this.chkBebidaMarcado);
    this.formartarDataGravacao(this.paciente, this.dataNascimento);

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

  carregarDadosIniciais() {
    this.ProfissaoService.buscarTodos().subscribe((profissoes: Profissao[]) => {
      profissoes.forEach((p) => {
        this.profissao.push({ label: p.descricao, value: p.descricao });
      })
    });
  }

  validarCamposObservacao(chkCigarro, chkBebida) {
    if (chkCigarro == false) {
      this.paciente.habitosVida.cigarro.observacaoCigarro = null;
    }
    if (chkBebida == false) {
      this.paciente.habitosVida.bebidaAlcoolica.observacaoBebidaAlcoolica = null;
    }
  }

  formartarDataGravacao(paciente: Paciente, data) {
    if (data) {
      let dia = parseInt(data.substring(0, 2));
      let mes = parseInt(data.substring(2, 4)) - 1;
      let ano = parseInt(data.substring(4, 8));

      let dataNascimento = new Date(ano, mes, dia);

      paciente.dataNascimento = dataNascimento

      return paciente;
    }
  }

  formatarDataLeitura(paciente: Paciente) {
    /** Atribui o valor da data retornando do banco a variável dataString */
    let dataString = paciente.dataNascimento.toString();

    /** Divide o valor da dataString em um array, separado pelo simbolo '-' 
     * dessa forma, sera dividido o ano e o mes, porém o dia esta junto com a hora
    */
    let arrayData = dataString.split("-")

    /** Divide o array onde tem o dia separando pelo simbolo 'T' 
     * e atribui o resultado a variável arrayDia */
    let arrayDia = arrayData[2].split("T")

    let dia = arrayDia[0];
    let mes = arrayData[1];
    let ano = arrayData[0];

    let dataNascimento = dia + mes + ano;

    return dataNascimento;
  }

  validarData(data: string){
    if(data){
      let dia = parseInt(data.substring(0, 2));
      let mes = parseInt(data.substring(2, 4));
      let ano = parseInt(data.substring(4, 8));

      if(dia > 31){
        this.dataNascimento = ""
      }
      if (mes > 12){
        this.dataNascimento = ""
      }
      
      let anoAtual = new Date().getFullYear()
      if(ano > anoAtual || ano < 1900){
        this.dataNascimento = ""
      }
    }
  }

  validarHora(horario: string, name) {
    if (horario) {
      let hora = parseInt(horario.substring(0, 2));
      let minutos = parseInt(horario.substring(3, 5));

      if (hora > 23 || minutos > 59) {
        this.limparCamposHoras(name);
      }
    }
  }

  limparCamposHoras(name: string) {
    switch (name) {
      case "acorda":
        this.paciente.rotina.acorda = "";
        break;
      case "cafedaManha":
        this.paciente.rotina.cafedaManha = "";
        break;
      case "lanchedaManha":
        this.paciente.rotina.lanchedaManha = "";
        break;
      case "almoco":
        this.paciente.rotina.almoco = "";
        break;
      case "lanchedaTarde":
        this.paciente.rotina.lanchedaTarde = "";
        break;
      case "jantar":
        this.paciente.rotina.jantar = "";
        break;
      case "dorme":
        this.paciente.rotina.dorme = "";
        break;
    }
  }

  calcularIMC() {
    let peso = this.paciente.dadosAntropometricos.peso;
    let altura = this.paciente.dadosAntropometricos.altura;

    if (altura && peso) {
      altura = altura / 100;
      let imc = peso / Math.pow(altura, 2);

      this.paciente.dadosAntropometricos.imc = parseFloat(imc.toFixed(2));
    }
  }

}
