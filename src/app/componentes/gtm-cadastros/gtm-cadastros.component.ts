import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageServiceUtil } from 'src/app/util/message-service-util.service';
import { GtmCadastrosService } from './gtm-cadastros.service';

@Component({
  selector: 'app-gtm-cadastros',
  templateUrl: './gtm-cadastros.component.html',
  styleUrls: ['./gtm-cadastros.component.scss']
})
export class GtmCadastrosComponent implements OnInit {

  titulo: String = 'Novo cadastro';


  constructor(private GtmCadastrosService: GtmCadastrosService, private router: Router, private mensagem: MessageServiceUtil) { }

  ngOnInit() {
  }

  voltar() {
    this.router.navigate(['']);
  }

}
