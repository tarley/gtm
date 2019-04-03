import { Paciente } from './paciente.model';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class PacienteService{
    urlApi = environment.urlApi.concat('v1/pacientes/');

    constructor(private httpClient: HttpClient){ }

    public inserirPaciente(paciente: Paciente){
        return this.httpClient.post(this.urlApi, paciente);
    }

    public buscarTodos(){
        return this.httpClient.get(this.urlApi);
    }

}
