import { PacienteComponent } from './paciente.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { GtmTabelaModule } from '../gtm-tabela/gtm-tabela.module';




@NgModule({
  declarations: [PacienteComponent],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    FormsModule,
    GtmTabelaModule
  ]
})
export class PacienteModule { }
