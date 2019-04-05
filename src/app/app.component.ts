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
  isUsuarioAutenticado: boolean;
    
    ngOnInit() {
        this.isUsuarioAutenticado = false;
        this.isUsuarioAutenticado = this.auth.isUsuarioAutenticado();
    }

  
}
