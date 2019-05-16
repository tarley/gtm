import { UsuarioService } from './shared/usuario.service';
import { CardModule } from 'primeng/card';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { UsuarioNovoComponent } from './usuario-novo/usuario-novo.component';
import { FormsModule } from '@angular/forms';
import { GtmTabelaModule } from '../gtm-tabela/gtm-tabela.module';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { KeyFilterModule } from 'primeng/keyfilter';
import {PasswordModule} from 'primeng/password';

@NgModule({
  declarations: [UsuarioComponent, UsuarioNovoComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    PasswordModule,
    CardModule,
    MessagesModule,
    MessageModule,
    GtmTabelaModule,
    KeyFilterModule,
  ],
  providers: [UsuarioService]
})
export class UsuarioModule { }
