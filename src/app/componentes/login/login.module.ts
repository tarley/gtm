import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './shared/auth.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
  ],
  providers: [AuthService],
  exports: [LoginComponent]
})
export class LoginModule { }
