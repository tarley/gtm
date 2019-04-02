import { AtendimentoNovoComponent } from './componentes/atendimento/atendimento-novo/atendimento-novo.component';
import { AtendimentoComponent } from './componentes/atendimento/atendimento.component';
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
  { path: 'usuario/:id', component: UsuarioNovoComponent },
  { path: 'usuario', component: UsuarioComponent },

  //Rotas Paciente
  { path: 'paciente', component: PacienteComponent },

  //Rotas Atendimento
  { path: 'atendimento', component: AtendimentoComponent },
  { path: 'atendimento/novo', component: AtendimentoNovoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }