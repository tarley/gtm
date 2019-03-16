import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { UsuarioNovoComponent } from './usuario-novo/usuario-novo.component';

@NgModule({
  declarations: [UsuarioComponent, UsuarioNovoComponent],
  imports: [
    CommonModule
  ]
})
export class UsuarioModule { }
