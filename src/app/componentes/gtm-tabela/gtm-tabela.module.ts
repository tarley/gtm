import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GtmTabelaComponent } from './gtm-tabela.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { GtmTabelaService } from './gtm-tabela.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [GtmTabelaComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    TableModule,
    ConfirmDialogModule,
  ],
  exports: [GtmTabelaComponent],
  providers: [GtmTabelaService, ConfirmationService]
})
export class GtmTabelaModule { }
