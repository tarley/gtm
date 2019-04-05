import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicamentoComponent } from './medicamento.component';
import { MedicamentoNovoComponent } from './medicamento-novo/medicamento-novo.component';
import {InputTextModule} from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import { GtmTabelaModule } from '../gtm-tabela/gtm-tabela.module';

@NgModule({
  declarations: [MedicamentoComponent, MedicamentoNovoComponent],
  imports: [
    CommonModule,
    InputTextModule,
    PanelModule,
    GtmTabelaModule,
  ]
})
export class MedicamentoModule { }
