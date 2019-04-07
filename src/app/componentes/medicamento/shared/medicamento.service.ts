import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Medicamento } from './medicamento.model';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {
  urlApi = environment.urlApi.concat('v1/medicamentos/');

  constructor(private httpClient: HttpClient) { }

  public inserirMedicamento(medicamento: Medicamento){
    return this.httpClient.post(this.urlApi, medicamento);
  }

  public buscarTodos(){
   return this.httpClient.get(this.urlApi); 
  }

  public excluir(medicamento: Medicamento){
    return this.httpClient.put(`${this.urlApi}/${medicamento._id}`, medicamento);
  }
}
