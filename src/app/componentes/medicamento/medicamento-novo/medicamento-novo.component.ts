import { Component, OnInit } from '@angular/core';
import { Medicamento } from '../shared/medicamento.model';
import { MedicamentoService } from '../shared/medicamento.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MensagemUtil } from 'src/app/util/mensagem-util';
import { MessageServiceUtil } from 'src/app/util/message-service-util.service';

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
