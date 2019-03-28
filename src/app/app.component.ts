import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { AuthService } from './componentes/login/shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

    constructor(private auth: AuthService) { }
    
  title = 'gtm';
  items: MenuItem[];
  isUsuarioAutenticado: boolean;
    
    ngOnInit() {
        this.isUsuarioAutenticado = false;
        this.items = [
            {label: 'Usuario', icon: 'pi pi-fw pi-user', routerLink: '/usuario/novo'},
            {label: 'Pacientes', icon: 'pi pi-fw pi-list', routerLink: '/paciente'},
            {label: 'Sair', icon: 'pi pi-fw pi-times', routerLink: '/login'}
        ];
        this.isUsuarioAutenticado = this.auth.isUsuarioAutenticado();
    }

  
}
