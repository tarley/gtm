import { MessageService } from 'primeng/api';
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
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [UsuarioComponent, UsuarioNovoComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    CardModule,
    MessagesModule,
    MessageModule,
    TableModule,
  ],
  providers: [UsuarioService, MessageService]
})
export class UsuarioModule { }
