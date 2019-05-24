import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicamentoComponent } from './medicamento.component';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { FormsModule } from '@angular/forms';
import { GtmTabelaModule } from '../gtm-tabela/gtm-tabela.module';
import { GtmCadastrosModule } from '../gtm-cadastros/gtm-cadastros.module';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MedicamentoService } from './shared/medicamento.service';
import { NovoMedicamentoComponent } from './novo-medicamento/novo-medicamento.component';

@NgModule({
  declarations: [MedicamentoComponent, NovoMedicamentoComponent],
  imports: [
    CommonModule,
    InputTextModule,
    PanelModule,
    FormsModule,
    GtmTabelaModule,
    GtmCadastrosModule,
    ButtonModule,
    CardModule,
  ], providers: [MedicamentoService]
})
export class MedicamentoModule { }
