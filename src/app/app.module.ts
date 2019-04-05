import { AtendimentoModule } from './componentes/atendimento/atendimento.module';
import { PacienteModule } from './componentes/paciente/paciente.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioModule } from './componentes/usuario/usuario.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { LoginModule } from './componentes/login/login.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { GtmTabelaModule } from './componentes/gtm-tabela/gtm-tabela.module';

import { FormsModule } from '@angular/forms';
import { MenuSuperiorModule } from './componentes/menu-superior/menu-superior.module';
import { MedicamentoModule } from './componentes/medicamento/medicamento.module';
import { MenuLateralModule } from './componentes/menu-lateral/menu-lateral.module';

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
    MenuLateralModule,
    GtmTabelaModule,
    FormsModule,
    PacienteModule,
    AtendimentoModule,
    MedicamentoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
