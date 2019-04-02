import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../usuario/shared/usuario.model';

@Component({
  selector: 'app-atendimento-novo',
  templateUrl: './atendimento-novo.component.html',
  styleUrls: ['./atendimento-novo.component.scss']
})
export class AtendimentoNovoComponent implements OnInit {

  titulo = 'Novo Atendimento - {NOME_PACIENTE}';

  form: Usuario;

  constructor() { }

  ngOnInit() {
  }

}
