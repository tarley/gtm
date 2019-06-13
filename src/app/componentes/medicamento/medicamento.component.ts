import { Component, OnInit } from '@angular/core';
import { Medicamento } from './shared/medicamento.model';
import { Router } from '@angular/router';
import { MedicamentoService } from './shared/medicamento.service';

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: ['./medicamento.component.scss']
})
export class MedicamentoComponent implements OnInit {

  titulo: String = 'Lista de Medicamentos';
  urlDelete = 'v1/medicamento';

  colunas: any[] = [
    {label: 'Descrição', var: 'descricao'},
    {label: 'Forma Farmaceutica/Dosagem', var: 'formaFarmaceuticaDosagem'}
  ];

  
  medicamento: Medicamento[] = [];

  constructor(private router: Router, private medicamentoService: MedicamentoService) { }

  ngOnInit() {
    this.buscarTodos()
  }

  buscarTodos(){
    this.medicamentoService.buscarTodos().subscribe((medicamento: Medicamento[]) => {
      this.medicamento = medicamento;
    })
  }

  navigate(route: String) {
    this.router.navigate([route]);
  }
}
