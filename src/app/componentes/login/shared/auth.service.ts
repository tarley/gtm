import { UsuarioLogado } from './usuario-logado.model';
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

  private urlLogin = environment.urlApi.concat('v1/usuarios/login');
  private urlValidacaoToken = environment.urlApi.concat('v1/usuarios/token');

  constructor(private router: Router, private httpClient: HttpClient) { }

  isUsuarioAutenticado() {
    if(this.getToken() != null) {
      return true;
    } else {
      return false;
    }
  }
  
  login(dadosLogin) {
    return this.httpClient.post(this.urlLogin, dadosLogin);
  }

  isTokenValido() {
    this.validaToken().subscribe();
  }

  validaToken() {
    return this.httpClient.get(this.urlValidacaoToken);
  }

  getUsuarioLogado(): UsuarioLogado {
    return this.getDecodedToken();
  }

  logout() {
    this.removeTokenLocalStorage();
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getDecodedToken() {
    try{
      return jwt_decode(this.getToken());
    } catch(err) {
      this.logout();
    }
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
