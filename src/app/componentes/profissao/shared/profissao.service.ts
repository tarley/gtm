import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Profissao } from './profissao.model';

@Injectable({
  providedIn: 'root'
})
export class ProfissaoService {
  urlApi = environment.urlApi.concat('v1/profissoes/');

  constructor(private httpClient: HttpClient) { }

  public inserirProfissao(profissao: Profissao){
    return this.httpClient.post(this.urlApi, profissao);
  }

  public buscarTodos(){
   return this.httpClient.get(this.urlApi); 
  }

  public excluir(profissao: Profissao){
    return this.httpClient.put(`${this.urlApi}/${profissao._id}`, profissao);
  }
}
