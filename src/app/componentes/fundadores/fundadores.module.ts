import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundadoresComponent } from './fundadores.component';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [FundadoresComponent],
  imports: [
    CommonModule,
    CardModule,
  ]
})
export class FundadoresModule { }
