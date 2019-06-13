import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { NgForm, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  OnSubmit(form: NgForm) {
    if(form.value.usuario != "" && form.value.senha != ""){
      this.auth.login(form.value).subscribe((resposta: any) => {
        if(resposta && resposta.auth) {
          this.auth.criaTokenLocalStorage(resposta.token);
          this.router.navigate(['/home']);
        }
      });
    }
  }


}
