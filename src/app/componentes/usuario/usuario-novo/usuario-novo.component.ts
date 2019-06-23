import { PerfilUsuario } from './../../../util/perfil-usuario';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/usuario.model';
import { NgForm } from '@angular/forms';
import { MensagemUtil } from 'src/app/util/mensagem-util';
import { UsuarioService } from '../shared/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageServiceUtil } from 'src/app/util/message-service-util.service';
import { SelectItem } from 'primeng/api';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { InstituicaoService } from '../../instituicao/shared/instituicao.service';
import { Instituicao } from '../../instituicao/shared/instituicao.model';
import { AuthService } from '../../login/shared/auth.service';

@Component({
  selector: 'app-usuario-novo',
  templateUrl: './usuario-novo.component.html',
  styleUrls: ['./usuario-novo.component.scss']
})
export class UsuarioNovoComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  titulo = 'Novo Usuário'

  usuario: Usuario = new Usuario();
  confirmacaoSenhaValida: boolean;

  formulario: NgForm;
  senha: String;
  confSenha: String;

  formDesabilitado: boolean = true;

  perfis: SelectItem[] = [];

  instituicao: SelectItem[] = [];
  au: any;

  constructor(private usuarioService: UsuarioService, private messageService: MessageServiceUtil, 
    private router: Router, private route: ActivatedRoute, private instituicaoService: InstituicaoService,
    private auth: AuthService) { }

  ngOnInit() {
    this.carregarDadosIniciais();
    this.carregarPerfil();
    this.route.params.subscribe(params => {
      if(params['id']) {
        const id = params['id'];
        this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
        this.usuarioService.buscarPorId(id).subscribe((usuario: Usuario) => {
          this.usuario = usuario;
          this.usuario.confSenha = usuario.senha;
          this.confirmacaoSenhaValida = true;
        }, () => {
            this.messageService.add(MensagemUtil.criaMensagemErro('Erro ao buscar usuário!'));
            this.blockUI.stop();
          }, 
          () => this.blockUI.stop());
      }
    })
  }

  salvar() {
    if (this.confirmacaoSenhaValida == true){
      let requisicao: Observable<Object>;
      if(this.usuario._id) {
        requisicao = this.usuarioService.atualizaUsuario(this.usuario);
      } else {
        requisicao = this.usuarioService.insereUsuario(this.usuario);
      }
      this.blockUI.start(MensagemUtil.SALVANDO_REGISTRO);
      requisicao.subscribe(() => {
        this.messageService.add(MensagemUtil.criaMensagemSucesso(MensagemUtil.REGISTRO_SALVO));
        this.voltar();
      }, (respostaErro) => {
          this.messageService.geraMensagensErro(respostaErro, MensagemUtil.ERRO_BUSCAR);
          this.blockUI.stop();
        },
      () => this.blockUI.stop());
    }else 
      this.messageService.add(MensagemUtil.criaMensagemErro(MensagemUtil.CONF_SENHA_INVALIDA));   
  }

  formularioInvalido(form: NgForm) {
    let formularioInvalido: boolean = false;
    if(form.invalid || !this.confirmacaoSenhaValida) {
      formularioInvalido = true;
    }
    return formularioInvalido;
  }

  validaConfirmacaoSenha(form: NgForm,) {
    this.senha = form.controls.senha.value;
    this.confSenha = form.controls.confSenha.value;

    if(this.senha == this.confSenha) {
      this.confirmacaoSenhaValida = true;
    } else {
      this.confirmacaoSenhaValida = false;
    }
  }

  carregarDadosIniciais(){
    let usuarioLogado = this.auth.getUsuarioLogado();

    if(usuarioLogado.perfil == PerfilUsuario.ADMINISTRADOR){

        this.instituicaoService.buscarTodos().subscribe((instituicao: Instituicao[]) => {
          instituicao.forEach((p) => {
            this.instituicao.push({ label: p.descricao, value: p._id})
          })
        })

    }else{

        this.instituicaoService.buscarPorId(usuarioLogado.idInstituicao).subscribe((instituicao: any) => {
          this.instituicao.push({ label: instituicao.descricao, value: instituicao._id})
        })

    }
  }

  habilitaFormulario() {
    this.formDesabilitado = false;
  }

  voltar() {
    this.router.navigate(['usuario']);
  }

  carregarPerfil(){
    var tipoPerfil = this.auth.getUsuarioLogado();

    if(tipoPerfil.perfil == PerfilUsuario.ADMINISTRADOR){
        this.perfis = [
          {label: PerfilUsuario.ADMINISTRADOR, value: PerfilUsuario.ADMINISTRADOR},
          {label: PerfilUsuario.GESTOR_INSTITUICAO, value: PerfilUsuario.GESTOR_INSTITUICAO},
          {label: PerfilUsuario.PROFISSIONAL_SAUDE, value: PerfilUsuario.PROFISSIONAL_SAUDE},
          {label: PerfilUsuario.ACADEMICO, value: PerfilUsuario.ACADEMICO}
        ];
    }else
        if(tipoPerfil.perfil == PerfilUsuario.GESTOR_INSTITUICAO){
            this.perfis = [
              {label: PerfilUsuario.PROFISSIONAL_SAUDE, value: PerfilUsuario.PROFISSIONAL_SAUDE},
              {label: PerfilUsuario.ACADEMICO, value: PerfilUsuario.ACADEMICO}
            ];
        }else 
            if (tipoPerfil.perfil == PerfilUsuario.PROFISSIONAL_SAUDE){
                this.perfis = [
                  {label: PerfilUsuario.ACADEMICO, value: PerfilUsuario.ACADEMICO}
                ];
        }
  }
}
