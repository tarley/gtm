import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GtmTabelaComponent } from './gtm-tabela.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [GtmTabelaComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
  ],
  exports: [GtmTabelaComponent]
})
export class GtmTabelaModule { }
