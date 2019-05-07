import { Component, OnInit, Input } from '@angular/core';
import { MensagemUtil } from 'src/app/util/mensagem-util';
import { Router } from '@angular/router';
import { MessageServiceUtil } from 'src/app/util/message-service-util.service';
import { GtmCadastrosService } from './gtm-cadastros.service';

@Component({
  selector: 'app-gtm-cadastros',
  templateUrl: './gtm-cadastros.component.html',
  styleUrls: ['./gtm-cadastros.component.scss']
})
export class GtmCadastrosComponent implements OnInit {

  @Input() titulo: String;
  @Input() caminho: string;
  @Input() rotaRetorno: string;

  form: any = {
    descricao: ''
  };

  constructor(private GtmCadastrosService: GtmCadastrosService, private router: Router, private mensagem: MessageServiceUtil) { }

  ngOnInit() {
  }

  salvar(){
    this.GtmCadastrosService.salvar(this.form, this.caminho).subscribe(() => {
      this.voltar();
      this.mensagem.add(MensagemUtil.criaMensagemSucesso(MensagemUtil.REGISTRO_SALVO));
    }, () => this.mensagem.add(MensagemUtil.criaMensagemErro(MensagemUtil.ERRO_SALVAR)));
}


  voltar() {
    this.router.navigate([this.rotaRetorno]);
  }

}
