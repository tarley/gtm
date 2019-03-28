import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  isUsuarioAutenticado() {
    return this.usuarioAutenticado;
  }
  

  Autenticar() {
    this.usuarioAutenticado = true;
    this.router.navigate(['/usuario/novo'])
  }

  logout() {
    this.usuarioAutenticado = false;
    this.router.navigate(['/login'])
  }
}
