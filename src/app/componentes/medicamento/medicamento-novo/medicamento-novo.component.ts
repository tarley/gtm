import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicamento-novo',
  templateUrl: './medicamento-novo.component.html',
  styleUrls: ['./medicamento-novo.component.scss']
})
export class MedicamentoNovoComponent implements OnInit {

  titulo: String = 'Novo Medicamento';

  caminho: string = 'v1/medicamentos/';

  rotaRetorno: string = 'medicamento';

  constructor() { }

  ngOnInit() {
  }

}
