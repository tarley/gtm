import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = true;
  private nomeUsuarioLogado: string = 'Usuário';

  constructor(private router: Router) { }

  isUsuarioAutenticado() {
    return this.usuarioAutenticado;
  }
  

  login() {
    this.usuarioAutenticado = true;
    this.router.navigate(['/usuario/novo'])
  }

  logout() {
    this.usuarioAutenticado = false;
    this.router.navigate(['/login'])
  }

  getUsuarioLogado() {
    return this.nomeUsuarioLogado;
  }
}
