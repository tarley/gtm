import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: ['./medicamento.component.scss']
})
export class MedicamentoComponent implements OnInit {

  titulo: String = 'Lista de Medicamento';

  constructor() { }

  ngOnInit() {
  }

}
