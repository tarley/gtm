import { HomeModule } from './componentes/home/home.module';
import { AuthGuard } from './guard/auth.guard';
import { InterceptorToken } from './componentes/login/shared/interceptor-token.service';
import { MessageModule } from 'primeng/message';
import { AtendimentoModule } from './componentes/atendimento/atendimento.module';
import { PacienteModule } from './componentes/paciente/paciente.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioModule } from './componentes/usuario/usuario.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { LoginModule } from './componentes/login/login.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { GtmTabelaModule } from './componentes/gtm-tabela/gtm-tabela.module';
import { SidebarModule } from 'primeng/sidebar';

import { FormsModule } from '@angular/forms';
import { MenuSuperiorModule } from './componentes/menu-superior/menu-superior.module';
import { MenuLateralModule } from './componentes/menu-lateral/menu-lateral.module';
import { MessageServiceUtil } from './util/message-service-util.service';
import { MessageService } from 'primeng/api';
import { BlockUIModule } from 'ng-block-ui';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { InstituicaoModule } from './componentes/instituicao/instituicao.module';
import { MedicamentoModule } from './componentes/medicamento/medicamento.module';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BlockUIModule.forRoot(),
    AppRoutingModule,
    UsuarioModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    ToastModule,
    UsuarioModule,
    LoginModule,
    MenuSuperiorModule,
    MenuLateralModule,
    GtmTabelaModule,
    SidebarModule,
    FormsModule,
    PacienteModule,
    AtendimentoModule,
    MessageModule,
    InstituicaoModule,
    MedicamentoModule,
    HomeModule,
  ],
  providers: [
    MessageServiceUtil, 
    MessageService,
    ConfirmationService,
    AuthGuard,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorToken, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
