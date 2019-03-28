import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioModule } from './componentes/usuario/usuario.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';

import {SidebarModule} from 'primeng/sidebar';
import {MenuModule} from 'primeng/menu';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { PacienteComponent } from './componentes/paciente/paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuarioModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule,
    SidebarModule,
    MenuModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
