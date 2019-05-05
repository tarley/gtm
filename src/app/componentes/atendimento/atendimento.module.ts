import { PacienteService } from './../paciente/shared/paciente.service';
import { AtendimentoService } from './shared/atendimento.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtendimentoComponent } from './atendimento.component';
import { AtendimentoNovoComponent } from './atendimento-novo/atendimento-novo.component';
import { CardModule } from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { GtmTabelaModule } from '../gtm-tabela/gtm-tabela.module';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { AccordionModule } from 'primeng/accordion';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TabViewModule } from 'primeng/tabview';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { AtendimentoImprimirComponent } from './atendimento-imprimir/atendimento-imprimir.component';
import { NgxPrintModule } from 'ngx-print';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { AtendimentoVisualizarComponent } from './atendimento-visualizar/atendimento-visualizar.component';
@NgModule({
  declarations: [AtendimentoComponent, AtendimentoNovoComponent, AtendimentoImprimirComponent, AtendimentoVisualizarComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    CardModule,
    InputTextModule,
    InputTextareaModule,
    InputMaskModule,
    DropdownModule,
    ButtonModule,
    GtmTabelaModule,
    MessagesModule,
    MessageModule,
    AccordionModule,
    TabViewModule,
    CalendarModule,
    NgxPrintModule,
    FieldsetModule,
    PanelModule
  ],
  providers: [AtendimentoService, PacienteService]
})
export class AtendimentoModule { }
