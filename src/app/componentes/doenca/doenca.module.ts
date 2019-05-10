import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import { GtmTabelaModule } from '../gtm-tabela/gtm-tabela.module';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { GtmCadastrosModule } from '../gtm-cadastros/gtm-cadastros.module';
import { DoencaComponent } from './doenca.component';
import { DoencaNovoComponent } from './doenca-novo/doenca-novo.component';
import { DoencaService } from './shared/doenca.service';

@NgModule({
  declarations: [DoencaComponent, DoencaNovoComponent],
  imports: [
    CommonModule,
    InputTextModule,
    PanelModule,
    GtmTabelaModule,
    ButtonModule,
    CardModule,
    FormsModule,
    GtmCadastrosModule,
  ], providers: [DoencaService]
})
export class DoencaModule { }
