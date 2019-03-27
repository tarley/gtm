import { Component, OnInit } from '@angular/core';
import { Usuario } from './shared/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  titulo: string = 'Lista de Usuários';

  usuarios: Usuario[] = [
    {nome: 'Daniel', email: 'daniel@email.com', perfil: 'administrador'},
    {nome: 'Henrique', email: 'henrique@email.com', perfil: 'comum'},
    {nome: 'Carlos', email: 'carlos@email.com', perfil: 'comum'},
    {nome: 'Nixon', email: 'nixon@email.com', perfil: 'comum'},
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }

}
