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

    validarCamposObservacao(paciente, chkCigarro, chkBebida) {
        if (chkCigarro == false) {
            paciente.habitosVida.cigarro.observacaoCigarro = "";
        }
        if (chkBebida == false) {
            paciente.habitosVida.bebidaAlcoolica.observacaoBebidaAlcoolica = "";
        }

        return paciente;
    }

    formatarDataLeitura(paciente: Paciente) {
        /** Atribui o valor da data retornando do banco a variável dataString */
        let dataString = paciente.dataNascimento.toString();

        /** Divide o valor da dataString em um array, separado pelo simbolo '-' 
         * dessa forma, sera dividido o ano e o mes, porém o dia esta junto com a hora
        */
        let arrayData = dataString.split("-")

        /** Divide o array onde tem o dia separando pelo simbolo 'T' 
         * e atribui o resultado a variável arrayDia */
        let arrayDia = arrayData[2].split("T")

        let dia = arrayDia[0];
        let mes = arrayData[1];
        let ano = arrayData[0];

        let dataNascimento = dia + mes + ano;

        return dataNascimento;
    }

    formartarDataGravacao(paciente: Paciente, data) {
        if (data) {
            let dia = parseInt(data.substring(0, 2));
            let mes = parseInt(data.substring(2, 4)) - 1;
            let ano = parseInt(data.substring(4, 8));

            let dataNascimento = new Date(ano, mes, dia);

            paciente.dataNascimento = dataNascimento

            return paciente;
        }
    }

    formatarHora(paciente: Paciente, horario) {
        if (horario) {
            const hours = horario.slice(0, 2);
            const minutes = horario.slice(3);

            const date = new Date();
            date.setHours(hours, minutes, 0);

            console.log(date);
        } 
    }

    public buscarTodos() {
        return this.httpClient.get(this.urlApi);
    }

    public buscarPorId(id: string) {
        return this.httpClient.get(`${this.urlApi}/${id}`)
    }

}
