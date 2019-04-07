import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {

  items: MenuItem[] = [
    {label: 'GTM Newton', items: [
      {label: 'Pacientes', icon: 'fa fa-user', routerLink: '/paciente'},
      // {label: 'Atendimento', icon: 'fa fa-list-alt', routerLink: '/atendimento'},
      {separator: true},
      {label: 'Usuários', icon: 'fa fa-user-circle-o', routerLink: '/usuario'},
      {separator: true},
      {label: 'Medicamentos', icon: 'fa fa-medkit', routerLink: '/medicamento'},
    ]}
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
