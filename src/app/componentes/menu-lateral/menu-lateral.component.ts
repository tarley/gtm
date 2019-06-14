import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../login/shared/auth.service';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {

  display: boolean = false;

  items: MenuItem[] = [
    {label: 'GTM Newton', items: [
      {label: 'Pacientes', icon: 'fa fa-user', routerLink: '/paciente'},
      {separator: true},
      {label: 'Atendimentos', icon: 'fa fa-list-alt', routerLink: '/atendimento'},
      {separator: true},
      {label: 'Instituições', icon: 'fa fa-graduation-cap', routerLink: '/instituicao'},
      {separator: true},
      {label: 'Medicamento', icon: 'fa fa-plus-square', routerLink: '/medicamento'},
      {separator: true},
      {label: 'Usuários', icon: 'fa fa-user-circle-o', routerLink: '/usuario'}
    ]}
  ];
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.restricaoPerfil();
  }

  clickItemMenu() {
    this.display = false;
  }

  restricaoPerfil(){
    var usuario = this.authService.getUsuarioLogado();

    if(usuario.perfil == 'Gestor da Instituicao' || usuario.perfil == 'Profissional Saude'){
      this.items = [
        {label: 'GTM Teste', items: [
          {label: 'Pacientes', icon: 'fa fa-user', routerLink: '/paciente'},
          {separator: true},
          {label: 'Atendimentos', icon: 'fa fa-list-alt', routerLink: '/atendimento'},
          {separator: true},
          {label: 'Medicamento', icon: 'fa fa-plus-square', routerLink: '/medicamento'},
          {separator: true},
          {label: 'Usuários', icon: 'fa fa-user-circle-o', routerLink: '/usuario'}
        ]}
      ];
    }else 
        if(usuario.perfil == 'Academico'){
          this.items = [
            {label: 'GTM Teste', items: [
              {label: 'Pacientes', icon: 'fa fa-user', routerLink: '/paciente'},
              {separator: true},
              {label: 'Atendimentos', icon: 'fa fa-list-alt', routerLink: '/atendimento'}
            ]}
          ];
        }
  }

}
