import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';


import { HttpClient } from '@angular/common/http';
import { Doenca } from './doenca.model';

@Injectable({
  providedIn: 'root'
})
export class DoencaService {

  urlApi = environment.urlApi.concat('v1/doencas/');

  constructor(private httpClient: HttpClient) { }

public inserirDoenca(doenca: Doenca) {
  return this.httpClient.post(this.urlApi, doenca);
}

public buscarTodos(){
  return this.httpClient.get(this.urlApi);
}

public excluir(doenca: Doenca){
  return this.httpClient.put(`${this.urlApi}/${doenca._id}`, doenca);
}


}
