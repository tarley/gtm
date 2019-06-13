import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from './componentes/login/shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private authService: AuthService) { }

  title = 'gtm';

  ngOnInit() {
  }

  isUsuarioLogado(): boolean {
    return this.authService.isUsuarioAutenticado();
  }



}
