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
    {var: 'campo1', label: 'Apresentação', id: 'descricao', name: 'descricao'},
    {var: 'campo2', label: 'Forma Farmaceutica/Dosagem', id: 'formaFarmaceuticaDosagem', name: 'formaFarmaceuticaDosagem'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
