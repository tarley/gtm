import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtendimentoComponent } from './atendimento.component';
import { AtendimentoNovoComponent } from './atendimento-novo/atendimento-novo.component';
import { MessageService } from 'primeng/api';
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

@NgModule({
  declarations: [AtendimentoComponent, AtendimentoNovoComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    GtmTabelaModule,
    MessagesModule,
    MessageModule,
    AccordionModule,
  ],
  providers: [MessageService]
})
export class AtendimentoModule { }
