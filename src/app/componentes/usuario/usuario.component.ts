import { MensagemUtil } from 'src/app/util/mensagem-util';
import { UsuarioService } from './shared/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './shared/usuario.model';
import { Router } from '@angular/router';
import { MessageServiceUtil } from 'src/app/util/message-service-util.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { InstituicaoService } from '../instituicao/shared/instituicao.service';
import { AuthService } from '../login/shared/auth.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  titulo: string = 'Lista de Usuários';
  urlDelete = 'v1/usuarios';
  rotaEdicao = 'usuario';
  inativar = '';

  colunas: any[] = [
    {var: 'nome', label: 'Nome'}, 
    {var:'email', label: 'E-mail'},
    {var:'nomeInstituicao', label: 'Instituição'}, 
    {var:'perfil', label: 'Perfil'},
  ];
  usuarios: Usuario[] = [];

  constructor(private router: Router, private usuarioService: UsuarioService, private messageService: MessageServiceUtil,
              private instituicaoService: InstituicaoService, private auth: AuthService) { }

  ngOnInit() {
    this.buscarTodos();
  }

  buscarTodos() {

    this.blockUI.start(MensagemUtil.CARREGANDO_REGISTRO);
    this.usuarioService.buscarTodos().subscribe((usuarios: Usuario[]) => {
      this.instituicaoService.buscarTodos().subscribe((instituicoes: any[]) => {
        usuarios.forEach(usuario => {
          instituicoes.forEach(instituicao => {
            if(instituicao._id == usuario.idInstituicao) {
              usuario.nomeInstituicao = instituicao.descricao;
            }
          })
        })
      })
      this.usuarios = usuarios;
    }, () => {
          this.messageService.add(MensagemUtil.criaMensagemErro(MensagemUtil.ERRO_BUSCAR));
          this.blockUI.stop();
        },
    () => this.blockUI.stop());
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }

}
