import { Usuario } from './usuario.model';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlApi = environment.urlApi.concat('v1/usuarios/');

  constructor(private httpClient: HttpClient) { }

  public insereUsuario(usuario: Usuario) {
    return this.httpClient.post(this.urlApi, usuario);  
  }

  public atualizaUsuario(usuario: Usuario) {
    return this.httpClient.put(`${this.urlApi}/${usuario._id}`, usuario);  
  }

  public buscarTodos() {
    return this.httpClient.get(this.urlApi);  
  }

  public buscarPorId(id: string) {
    return this.httpClient.get(`${this.urlApi}${id}`);
  }

}
