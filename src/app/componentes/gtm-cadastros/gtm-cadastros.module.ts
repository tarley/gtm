import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { GtmCadastrosComponent } from './gtm-cadastros.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [GtmCadastrosComponent],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
  ], exports: [GtmCadastrosComponent]
})
export class GtmCadastrosModule { }
