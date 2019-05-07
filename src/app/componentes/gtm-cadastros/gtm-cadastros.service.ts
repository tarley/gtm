import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GtmCadastrosService {

  urlApi = environment.urlApi;

  constructor(private httpClient: HttpClient) { }

  public salvar(objeto: any, caminho: string){
    return this.httpClient.post(this.urlApi + caminho, objeto);
  }
}
