import { MessageServiceUtil } from './../../../util/message-service-util.service';
import { Constantes } from 'src/app/util/constantes';
import { SelectItem, MessageService } from 'primeng/api';
import { NgForm } from '@angular/forms';
import { Paciente, DadosAntropometricos } from './../shared/paciente.model';
import { Component, OnInit } from '@angular/core';
import { PacienteService } from './../shared/paciente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MensagemUtil } from 'src/app/util/mensagem-util';
import { Observable } from 'rxjs';
import { NgBlockUI, BlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-paciente-novo',
  templateUrl: './paciente-novo.component.html',
  styleUrls: ['./paciente-novo.component.scss']
})
export class PacienteNovoComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  titulo: String;

  paciente: Paciente = new Paciente()
  
  sexo: SelectItem[] = Constantes.sexo;

  estadoCivil: SelectItem[] = Constantes.estadoCivil;

  chkCigarroMarcado: Boolean = false;
  chkBebidaMarcado: Boolean = false;
  chkAtividadeFisicaMarcado: Boolean = false;

  switchSituacao: Boolean;

  status: String = "Ativo";
  show = false;

  dataNascimento;

  constructor(private pacienteService: PacienteService,
    private router: Router, private messageService: MessageServiceUtil, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.show = true;
        this.titulo = 'Editar Paciente';
        const id = params['id'];
        this.pacienteService.buscarPorId(id).subscribe((paciente: Paciente) => {
          this.paciente = paciente;
          if (!paciente.dadosAntropometricos) {
            paciente.dadosAntropometricos = new DadosAntropometricos();
          }
          this.chkCigarroMarcado = paciente.habitosVida.cigarro.fumante;
          this.chkBebidaMarcado = paciente.habitosVida.bebidaAlcoolica.consome;
          this.chkAtividadeFisicaMarcado = paciente.habitosVida.atividadeFisica.pratica;

          this.dataNascimento = this.formatarDataLeitura(this.paciente);
        }), (respostaErro) => this.messageService.add(MensagemUtil.criaMensagemErro('Erro ao Buscar Paciente'))
      } else {
        this.titulo = 'Novo Paciente';
      }
    })
  }

  salvar() {
    this.validarCamposObservacao(this.chkCigarroMarcado, this.chkBebidaMarcado, this.chkAtividadeFisicaMarcado, this.switchSituacao);
    this.formartarDataGravacao(this.paciente, this.dataNascimento);
    
    let requisicao: Observable<Object>;
    if (!this.paciente._id) {
      requisicao = this.pacienteService.inserirPaciente(this.paciente);
    } else {
      requisicao = this.pacienteService.atualizaPaciente(this.paciente);
    }
    this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
    requisicao.subscribe(() => {
      this.messageService.add(MensagemUtil.criaMensagemSucesso(MensagemUtil.REGISTRO_SALVO));
      this.voltar()
    }, (respostaErro) => {
      this.messageService.geraMensagensErro(respostaErro, MensagemUtil.ERRO_SALVAR)
      this.blockUI.stop();
    }, () => this.blockUI.stop());
  }

  voltar() {
    this.router.navigate(['paciente']);
  }

  validarSituacao(evento){
    
  }

  validarCheckBoxSwitch(opcao, evento) {
    switch (opcao) {
      case "fumante":
        if (evento == false) {
          this.chkCigarroMarcado = evento;
        } else {
          this.chkCigarroMarcado = evento;
        }
        break;

      case "consome":
        if (evento == false) {
          this.chkBebidaMarcado = evento;
        } else {
          this.chkBebidaMarcado = evento;
        }
        break;

      case "pratica":
        if (evento == false) {
          this.chkAtividadeFisicaMarcado = evento;
        } else {
          this.chkAtividadeFisicaMarcado = evento;
        }
    }
  }

  validarCamposObservacao(chkCigarro, chkBebida, chkAtividadeFisica, switchSituacao) {
    if (chkCigarro == false) {
      this.paciente.habitosVida.cigarro.observacaoCigarro = null;
    }
    if (chkBebida == false) {
      this.paciente.habitosVida.bebidaAlcoolica.observacaoBebidaAlcoolica = null;
    }
    if (chkAtividadeFisica == false) {
      this.paciente.habitosVida.atividadeFisica.observacaoAtividadeFisica = null;
    }
    if(switchSituacao == true){
      this.paciente.motivoInativo = null;
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

  validarData(data: string) {
    if (data) {
      let dia = parseInt(data.substring(0, 2));
      let mes = parseInt(data.substring(2, 4));
      let ano = parseInt(data.substring(4, 8));

      if (dia > 31) {
        this.dataNascimento = ""
      }
      if (mes > 12) {
        this.dataNascimento = ""
      }

      let anoAtual = new Date().getFullYear()
      if (ano > anoAtual || ano < 1900) {
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

  alterarStatus(){
    if(this.paciente.ativo == false){
      this.status = "Inativo"
      this.switchSituacao = false
    } else {
      this.status = "Ativo"
      this.switchSituacao = true
    }
  }

}
