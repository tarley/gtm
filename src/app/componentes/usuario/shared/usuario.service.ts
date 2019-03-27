import { Usuario } from './usuario.model';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlApi = environment.urlApi.concat('usuarios/v1/');

  constructor(private httpClient: HttpClient) { }

  public insereUsuario(usuario: Usuario) {
    return this.httpClient.post(`${this.urlApi}`, usuario);  
  }

}
