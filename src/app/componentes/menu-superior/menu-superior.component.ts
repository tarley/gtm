import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/shared/auth.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.scss']
})
export class MenuSuperiorComponent implements OnInit {

  usuarioLogado: string = 'Usuário';
  msgUsuario: string;

  itens = [
    {label: 'Logout', icon: 'fa fa-sign-out', command: () => {
        this.logout();
    }},
];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.criaMensagem();
    AuthService.nomeUsuarioAlterado.subscribe(nomeUsuario => {
      console.log(nomeUsuario)
      this.usuarioLogado = nomeUsuario;
    })
  }

  criaMensagem() {
    this.msgUsuario = `Olá, ${this.usuarioLogado}`;
  }

  logout() {
    this.authService.logout();
  }

}
