import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Instituicao } from './instituicao.model';

@Injectable({
  providedIn: 'root'
})
export class InstituicaoService {
  
  urlApi = environment.urlApi.concat('v1/instituicao');

  constructor(private httpClient: HttpClient) { }

  public inserirInstituicao(instituicao: Instituicao){
    return this.httpClient.post(this.urlApi, instituicao);
  }

  public buscarTodos(){
   return this.httpClient.get(this.urlApi); 
  }

  public buscarPorId(id: string) {
    return this.httpClient.get(`${this.urlApi}/${id}`)
  }

  public excluir(instituicao: Instituicao){
    return this.httpClient.put(`${this.urlApi}/${instituicao._id}`, instituicao);
  }
}
