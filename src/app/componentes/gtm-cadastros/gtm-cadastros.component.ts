import { Component, OnInit, Input } from '@angular/core';
import { MensagemUtil } from 'src/app/util/mensagem-util';
import { Router } from '@angular/router';
import { MessageServiceUtil } from 'src/app/util/message-service-util.service';
import { GtmCadastrosService } from './gtm-cadastros.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-gtm-cadastros',
  templateUrl: './gtm-cadastros.component.html',
  styleUrls: ['./gtm-cadastros.component.scss']
})
export class GtmCadastrosComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

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
    this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
    this.GtmCadastrosService.salvar(this.form, this.caminho).subscribe(() => {
      this.voltar();
      this.mensagem.add(MensagemUtil.criaMensagemSucesso(MensagemUtil.REGISTRO_SALVO));
    }, () => {
          this.mensagem.add(MensagemUtil.criaMensagemErro(MensagemUtil.ERRO_SALVAR));
          this.blockUI.stop();
        },
    () => this.blockUI.stop());
}


  voltar() {
    this.router.navigate([this.rotaRetorno]);
  }

}
