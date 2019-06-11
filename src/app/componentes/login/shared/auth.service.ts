import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import * as jwt_decode from "jwt-decode";
import { getToken } from '@angular/router/src/utils/preactivation';
import { AppComponent } from 'src/app/app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  private nomeUsuarioLogado: string = 'Usuário';

  private urlLogin = environment.urlApi.concat('v1/usuarios/login');

  static statusUsuarioAlterado = new EventEmitter<boolean>();
  static nomeUsuarioAlterado = new EventEmitter<string>();

  constructor(private router: Router, private httpClient: HttpClient) { }

  isUsuarioAutenticado() {
    return this.usuarioAutenticado;
  }
  
  login(dadosLogin) {
    return this.httpClient.post(this.urlLogin, dadosLogin);
  }

  setUsuarioAutenticado(isUsuarioAutenticado: boolean) {
    AuthService.statusUsuarioAlterado.emit(isUsuarioAutenticado);
    this.usuarioAutenticado = isUsuarioAutenticado;
  }

  setNomeUsuario(nomeUsuario: string) {
    AuthService.nomeUsuarioAlterado.emit(nomeUsuario);
    this.nomeUsuarioLogado = nomeUsuario;
  }

  getNomeUsuario() {
    return this.nomeUsuarioLogado;
  }

  logout() {
    this.removeTokenLocalStorage();
    this.setUsuarioAutenticado(false);
    this.router.navigate(['/']);
  }

  getPerfilUsuario() {
    return 'Administrador';
  }

  getToken() {
    return localStorage.getItem('token');
  }

  decodeToken() {
    return jwt_decode(this.getToken());
  }

  criaTokenLocalStorage(token: string) {
    if(token.length > 0) {
      localStorage.setItem('token', token);
    }
  }

  removeTokenLocalStorage() {
    localStorage.removeItem('token');
  }
}
