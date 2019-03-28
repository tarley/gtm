import { PacienteModule } from './componentes/paciente/paciente.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioModule } from './componentes/usuario/usuario.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { LoginModule } from './componentes/login/login.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { GtmTabelaModule } from './componentes/gtm-tabela/gtm-tabela.module';

import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { FormsModule } from '@angular/forms';
import { MenuSuperiorModule } from './componentes/menu-superior/menu-superior.module';

@NgModule({
  declarations: [
    AppComponent,
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
    UsuarioModule,
    LoginModule,
    MenuSuperiorModule,
    GtmTabelaModule,
    SidebarModule,
    MenuModule,
    FormsModule,
    PacienteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
