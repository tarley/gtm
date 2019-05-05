import { Observable, timer } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../shared/usuario.model';
import { NgForm } from '@angular/forms';
import { MensagemUtil } from 'src/app/util/mensagem-util';
import { UsuarioService } from '../shared/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageServiceUtil } from 'src/app/util/message-service-util.service';
import { SelectItem } from 'primeng/api';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { timeout } from 'q';

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

  perfis: SelectItem[] = [
    {label: 'Administrador', value: 'Administrador'},
    {label: 'Normal', value: 'Normal'},
  ]

  constructor(private usuarioService: UsuarioService, private messageService: MessageServiceUtil, 
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['id']) {
        const id = params['id'];
        this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
        this.usuarioService.buscarPorId(id).subscribe((usuario: Usuario) => {
          this.usuario = usuario;
          this.usuario.confSenha = usuario.senha;
        }, () => this.messageService.add(MensagemUtil.criaMensagemErro('Erro ao buscar usuário!'))
        , () => this.blockUI.stop());
      }
    })
  }

  salvar() {
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
    }, (respostaErro) => this.messageService.geraMensagensErro(respostaErro, MensagemUtil.ERRO_BUSCAR),
    () => this.blockUI.stop());
  }

  formularioInvalido(form: NgForm) {
    let formularioInvalido: boolean = false;
    if(form.invalid || !this.confirmacaoSenhaValida) {
      formularioInvalido = true;
    }
    return formularioInvalido;
  }

  validaConfirmacaoSenha(form: NgForm) {
    if(form.controls.senha.value == form.controls.confSenha.value) {
      this.confirmacaoSenhaValida = true;
    } else {
      this.confirmacaoSenhaValida = false;
    }
  }

  voltar() {
    this.router.navigate(['usuario']);
  }

}
