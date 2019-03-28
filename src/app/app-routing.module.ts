import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { LoginComponent } from './componentes/login/login.component';
import { UsuarioNovoComponent } from './componentes/usuario/usuario-novo/usuario-novo.component';
import { PacienteComponent } from './componentes/paciente/paciente.component';

const routes: Routes = [
  //Rotas Login
  { path: 'login', component: LoginComponent },

  //Rotas Usuário
  { path: 'usuario/novo', component: UsuarioNovoComponent },
  { path: 'usuario', component: UsuarioComponent },

  //Rotas Paciente
  { path: 'paciente', component: PacienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }