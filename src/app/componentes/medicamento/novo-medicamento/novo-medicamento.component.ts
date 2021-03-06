import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-medicamento',
  templateUrl: './novo-medicamento.component.html',
  styleUrls: ['./novo-medicamento.component.scss']
})
export class NovoMedicamentoComponent implements OnInit {

  titulo: String = 'Novo Medicamento';
  caminho: String = 'v1/medicamento/';
  rotaRetorno: String = 'medicamento';
  campos: any [] = [
    {var: 'descricao', label: 'Apresentação'},
    {var: 'formaFarmaceuticaDosagem', label: 'Forma Farmacêutica/Dosagem'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
