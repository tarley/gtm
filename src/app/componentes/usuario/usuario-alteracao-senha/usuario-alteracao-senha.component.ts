import { MensagemUtil } from 'src/app/util/mensagem-util';
import { MessageServiceUtil } from 'src/app/util/message-service-util.service';
import { UsuarioService } from './../shared/usuario.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Usuario } from '../shared/usuario.model';

@Component({
  selector: 'app-usuario-alteracao-senha',
  templateUrl: './usuario-alteracao-senha.component.html',
  styleUrls: ['./usuario-alteracao-senha.component.scss']
})
export class UsuarioAlteracaoSenhaComponent implements OnInit {

  titulo: string;

  @Input() usuario: Usuario;
  @Input() isVisivel: boolean = false;

  @Output() modalFechado = new EventEmitter();

  form = {
    senhaAntiga: '',
    novaSenha: '',
    confNovaSenha: ''
  };

  constructor(private usuarioService: UsuarioService, private messageService: MessageServiceUtil) { }

  ngOnInit() {
  }

  alterarSenha() {
    this.usuarioService.redefinirSenha(this.form, this.usuario._id).subscribe(() => {
      this.messageService.add(MensagemUtil.criaMensagemSucesso(MensagemUtil.SUCESSO_SENHA_REDEFINIDA))
    }, (erro) => this.messageService.geraMensagensErro(erro, MensagemUtil.ERRO_REDEFINIR_SENHA));
  }

  defineTitulo() {
    return this.titulo = `Alteração Senha - ${this.usuario.nome}`
  }

  fechaModal() {
    this.isVisivel = false;
    this.modalFechado.emit({isFechado: this.isVisivel})
  }

}
