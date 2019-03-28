import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private app: AppComponent) { }

  ngOnInit() {
    this.app.isUsuarioAutenticado = false;
  }

  OnSubmit(form) {
    if(form.value.usuario != "" && form.value.senha != ""){
      this.auth.login();
      this.app.isUsuarioAutenticado = true;
    }
  }


}
