import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicamento } from './shared/medicamento.model';
import { MedicamentoService } from './shared/medicamento.service';

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: ['./medicamento.component.scss']
})
export class MedicamentoComponent implements OnInit {

  titulo: String = 'Lista de Medicamento';
  urlDelete = 'v1/medicamentos';

  colunas: string[] = ['descricao'];
  medicamentos: Medicamento[] = [];

  constructor(private router: Router, private medicamentoService: MedicamentoService) { }

  ngOnInit() {
    this.buscarTodos();
  }

  buscarTodos(){
    this.medicamentoService.buscarTodos().subscribe((medicamentos: Medicamento[]) => {
      this.medicamentos = medicamentos;
    })
  }

  navigate(route: String) {
    this.router.navigate([route]);
  }

}
