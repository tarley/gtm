import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfissaoComponent } from './profissao.component';
import { ProfissaoNovoComponent } from './profissao-novo/profissao-novo.component';
import {InputTextModule} from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import { GtmTabelaModule } from '../gtm-tabela/gtm-tabela.module';
import {ButtonModule} from 'primeng/button';
import { ProfissaoService } from './shared/profissao.service';
import {CardModule} from 'primeng/card';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfissaoComponent, ProfissaoNovoComponent],
  imports: [
    CommonModule,
    InputTextModule,
    PanelModule,
    FormsModule,
    GtmTabelaModule,
    ButtonModule,
    CardModule,
  ],
  providers: [ProfissaoService]
})
export class ProfissaoModule { }
