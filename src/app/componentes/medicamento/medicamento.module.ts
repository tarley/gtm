import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicamentoComponent } from './medicamento.component';
import { MedicamentoNovoComponent } from './medicamento-novo/medicamento-novo.component';
import {InputTextModule} from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import { GtmTabelaModule } from '../gtm-tabela/gtm-tabela.module';
import {ButtonModule} from 'primeng/button';
import { MedicamentoService } from './shared/medicamento.service';
import {CardModule} from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { GtmCadastrosModule } from '../gtm-cadastros/gtm-cadastros.module';

@NgModule({
  declarations: [MedicamentoComponent, MedicamentoNovoComponent],
  imports: [
    CommonModule,
    InputTextModule,
    PanelModule,
    FormsModule,
    GtmTabelaModule,
    GtmCadastrosModule,
    ButtonModule,
    CardModule,
  ],
  providers: [MedicamentoService]
})
export class MedicamentoModule { }
