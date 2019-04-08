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

  form: Medicamento;

  constructor(private MedicamentoService: MedicamentoService, private router: Router, private mensagem: MessageServiceUtil) { }

  ngOnInit() {
  }

  voltar() {
    this.router.navigate(['medicamento']);
  }

  salvar(form: NgForm){
      this.MedicamentoService.inserirMedicamento(form.value).subscribe(() => {
        this.voltar();
        this.mensagem.add(MensagemUtil.criaMensagemSucesso(MensagemUtil.REGISTRO_SALVO));
      }, () => this.mensagem.add(MensagemUtil.criaMensagemErro(MensagemUtil.FORMULARIO_INVALIDO)));
  }

}
