import { Component, OnInit } from '@angular/core';
import { Medicamento } from './shared/medicamento.model';
import { Router } from '@angular/router';
import { MedicamentoService } from './shared/medicamento.service';
import { MessageService } from 'primeng/api';
import { MensagemUtil } from 'src/app/util/mensagem-util';
import { NgBlockUI, BlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: ['./medicamento.component.scss']
})
export class MedicamentoComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  titulo: String = 'Lista de Medicamentos';
  urlDelete = 'v1/medicamento';

  colunas: any[] = [
    {label: 'Descrição', var: 'descricao'},
    {label: 'Forma Farmaceutica/Dosagem', var: 'formaFarmaceuticaDosagem'}
  ];

  nome: string;
  medicamento: Medicamento[] = [];

  constructor(private router: Router, private medicamentoService: MedicamentoService, private messageService: MessageService) { }

  ngOnInit() {
    this.buscarTodos()
  }

  buscarTodos(){
    this.medicamentoService.buscarTodos().subscribe((medicamento: Medicamento[]) => {
      this.medicamento = medicamento;
    })
  }

  buscarPorNome(){
    if (this.nome) {
      this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
      this.medicamentoService.buscarPorNome(this.nome).subscribe((medicamentos: Medicamento[]) => {
          this.medicamento = medicamentos;
      }, (respostaErro) => { this.messageService.add(MensagemUtil.criaMensagemErro(respostaErro.error.errors[0].msg)) },
        () => this.blockUI.stop());
    } else {
      this.buscarTodos();
    }
  }

  navigate(route: String) {
    this.router.navigate([route]);
  }
}
