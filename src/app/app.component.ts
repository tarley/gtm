import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from './componentes/login/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private authService: AuthService, private router: Router) { }

  title = 'gtm';

  ngOnInit() {
  }

  isUsuarioLogado(): boolean {
    if(this.authService.isUsuarioAutenticado()) {
      this.router.navigate(['home']);
    }  
    return this.authService.isUsuarioAutenticado();
  }



}
