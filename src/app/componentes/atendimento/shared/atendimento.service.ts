import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {

  private urlServico = environment.urlApi.concat('v1/atendimento')

  constructor(private httpClient: HttpClient) { }

  buscarTodos() {
    return this.httpClient.get(this.urlServico);
  }
}
