import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './shared/auth.service';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    FormsModule
  ],
  providers: [AuthService],
  exports: [LoginComponent]
})
export class LoginModule { }
