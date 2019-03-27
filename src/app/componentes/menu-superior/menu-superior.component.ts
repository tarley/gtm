import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/shared/auth.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.scss']
})
export class MenuSuperiorComponent implements OnInit {

  usuarioLogado: string = '';
  msgUsuario: string;

  itens = [
    {label: 'Logout', icon: 'fa fa-sign-out', command: () => {
        this.logout();
    }},
];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.usuarioLogado = this.authService.getUsuarioLogado();
    this.msgUsuario = `Olá, ${this.usuarioLogado}`;
  }

  logout() {
    
  }

}
