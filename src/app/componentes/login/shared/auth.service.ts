import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  private nomeUsuarioLogado: string = 'Daniel';

  constructor(private router: Router) { }

  isUsuarioAutenticado() {
    this.usuarioAutenticado = true;

    return this.usuarioAutenticado;
  }

  logout() {
    this.usuarioAutenticado = false;
    this.router.navigate(['/login'])
  }

  getUsuarioLogado() {
    return this.nomeUsuarioLogado;
  }
}
