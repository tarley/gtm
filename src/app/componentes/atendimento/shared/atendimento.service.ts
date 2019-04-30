import { Atendimento } from './atendimento.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {

  private urlServico = environment.urlApi.concat('v1/atendimentos')

  constructor(private httpClient: HttpClient) { }

  buscarTodos() {
    return this.httpClient.get(this.urlServico);
  }

  salvar(atendimento: Atendimento) {
    return this.httpClient.post(this.urlServico, atendimento);
  }

  buscaUltimoAtendimento(idPaciente: string) {
    return this.httpClient.get(`${this.urlServico}/paciente/${idPaciente}`);
  }

  buscaPorCPFPaciente(cpfPaciente: string) {
    return this.httpClient.get(`${this.urlServico}/paciente/cpf/${cpfPaciente}`);
  }
}
