import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Instituicao } from './instituicao.model';

@Injectable({
  providedIn: 'root'
})
export class InstituicaoService {
  
  urlApi = environment.urlApi.concat('v1/instituicao/');

  constructor(private httpClient: HttpClient) { }

  public inserirMedicamento(medicamento: Instituicao){
    return this.httpClient.post(this.urlApi, medicamento);
  }

  public buscarTodos(){
   return this.httpClient.get(this.urlApi); 
  }

  public excluir(medicamento: Instituicao){
    return this.httpClient.put(`${this.urlApi}/${medicamento._id}`, medicamento);
  }
}
