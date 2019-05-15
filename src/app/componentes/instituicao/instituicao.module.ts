import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstituicaoComponent } from './instituicao.component';
import { NovaInstituicaoComponent } from './nova-instituicao/nova-instituicao.component';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { FormsModule } from '@angular/forms';
import { GtmTabelaModule } from '../gtm-tabela/gtm-tabela.module';
import { GtmCadastrosModule } from '../gtm-cadastros/gtm-cadastros.module';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InstituicaoService } from './shared/instituicao.service';

@NgModule({
  declarations: [InstituicaoComponent, NovaInstituicaoComponent],
  imports: [
    CommonModule,
    InputTextModule,
    PanelModule,
    FormsModule,
    GtmTabelaModule,
    GtmCadastrosModule,
    ButtonModule,
    CardModule,
  ], providers: [InstituicaoService]
})
export class InstituicaoModule { }
