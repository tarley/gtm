import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GtmTabelaService {

  private urlApi = environment.urlApi;

  constructor(private httpClient: HttpClient) { }

  public deletaItem(urlDelete: string, id: string) {
    return this.httpClient.delete(`${this.urlApi}${urlDelete}/${id}`);
  }
}
