import { Component, OnInit } from '@angular/core';
import { Profissao } from '../shared/profissao.model';
import { ProfissaoService } from '../shared/profissao.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MensagemUtil } from 'src/app/util/mensagem-util';
import { MessageServiceUtil } from 'src/app/util/message-service-util.service';

@Component({
  selector: 'app-medicamento-novo',
  templateUrl: './profissao-novo.component.html',
  styleUrls: ['./profissao-novo.component.scss']
})
export class ProfissaoNovoComponent implements OnInit {

  titulo: String = 'Nova Profissão';

  form: Profissao;

  constructor(private MedicamentoService: ProfissaoService, private router: Router, private mensagem: MessageServiceUtil) { }

  ngOnInit() {
  }

  voltar() {
    this.router.navigate(['profissao']);
  }

  salvar(form: NgForm){
      this.MedicamentoService.inserirProfissao(form.value).subscribe(() => {
        this.voltar();
        this.mensagem.add(MensagemUtil.criaMensagemSucesso(MensagemUtil.REGISTRO_SALVO));
      }, () => this.mensagem.add(MensagemUtil.criaMensagemErro(MensagemUtil.FORMULARIO_INVALIDO)));
  }

}
