import { MensagemUtil } from 'src/app/util/mensagem-util';
import { UsuarioService } from './shared/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './shared/usuario.model';
import { Router } from '@angular/router';
import { MessageServiceUtil } from 'src/app/util/message-service-util.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  titulo: string = 'Lista de Usuários';
  urlDelete = 'v1/usuarios';
  rotaEdicao = 'usuario';

  colunas: string[] = ['nome', 'email', 'perfil'];
  usuarios: Usuario[] = [];

  constructor(private router: Router, private usuarioService: UsuarioService, private messageService: MessageServiceUtil) { }

  ngOnInit() {
    this.buscarTodos();
  }

  buscarTodos() {
    this.usuarioService.buscarTodos().subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
    }, () => this.messageService.add(MensagemUtil.criaMensagemErro(MensagemUtil.ERRO_BUSCAR)))
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }

}
