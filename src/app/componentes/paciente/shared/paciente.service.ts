import { Paciente } from './paciente.model';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { concat } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class PacienteService {
    urlApi = environment.urlApi.concat('v1/pacientes/');

    constructor(private httpClient: HttpClient) { }

    public inserirPaciente(paciente: Paciente) {
        return this.httpClient.post(this.urlApi, paciente);
    }

    public atualizaPaciente(paciente: Paciente) {
        return this.httpClient.put(`${this.urlApi}/${paciente._id}`, paciente);
    }

    public buscarTodos() {
        return this.httpClient.get(this.urlApi);
    }

    public buscarPorId(id: string) {
        return this.httpClient.get(`${this.urlApi}/${id}`)
    }

    public buscarPorCpf(cpf: string){
        return this.httpClient.get(`${this.urlApi}/cpf/${cpf}`)
    }

    public buscarPorNome(nome: string){
        return this.httpClient.get(`${this.urlApi}/nome/${nome}`)
    }

}
