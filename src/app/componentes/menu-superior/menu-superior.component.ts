import { UsuarioLogado } from './../login/shared/usuario-logado.model';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/shared/auth.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.scss']
})
export class MenuSuperiorComponent implements OnInit {

  itens = [
    {label: 'Logout', icon: 'fa fa-sign-out', command: () => {
        this.logout();
    }},
];

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  criaMensagem() {
    const usuarioLogado: UsuarioLogado = this.authService.getUsuarioLogado();
    return `Olá, ${usuarioLogado ? usuarioLogado.nome : ''}`;
  }

  logout() {
    this.authService.logout();
  }

}
