import { PacienteComponent } from './paciente.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { GtmTabelaModule } from '../gtm-tabela/gtm-tabela.module';
import { PacienteNovoComponent } from './paciente-novo/paciente-novo.component';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [PacienteComponent, PacienteNovoComponent],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    FormsModule,
    GtmTabelaModule,
    InputTextModule,
    BrowserAnimationsModule,
    InputMaskModule,
    DropdownModule
  ]
})
export class PacienteModule { }
