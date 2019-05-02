import { AtendimentoNovoComponent } from './componentes/atendimento/atendimento-novo/atendimento-novo.component';
import { AtendimentoComponent } from './componentes/atendimento/atendimento.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { LoginComponent } from './componentes/login/login.component';
import { UsuarioNovoComponent } from './componentes/usuario/usuario-novo/usuario-novo.component';
import { PacienteComponent } from './componentes/paciente/paciente.component';
import { PacienteNovoComponent } from './componentes/paciente/paciente-novo/paciente-novo.component';
import { MedicamentoComponent } from './componentes/medicamento/medicamento.component';
import { MedicamentoNovoComponent } from './componentes/medicamento/medicamento-novo/medicamento-novo.component';
import { ProfissaoComponent } from './componentes/profissao/profissao.component';
import { ProfissaoNovoComponent } from './componentes/profissao/profissao-novo/profissao-novo.component';
import { AtendimentoImprimirComponent } from './componentes/atendimento/atendimento-imprimir/atendimento-imprimir.component';

const routes: Routes = [
  //Rotas Login
  { path: 'login', component: LoginComponent },

  //Rotas Usuário
  { path: 'usuario/novo', component: UsuarioNovoComponent },
  { path: 'usuario/:id', component: UsuarioNovoComponent },
  { path: 'usuario', component: UsuarioComponent },

  //Rotas Paciente
  { path: 'paciente', component: PacienteComponent },
  { path: 'paciente/novo', component: PacienteNovoComponent },
  { path: 'paciente/:id', component: PacienteNovoComponent },

  //Rotas Atendimento
  { path: 'atendimento', component: AtendimentoComponent },
  { path: 'atendimento/novo/:idPaciente', component: AtendimentoNovoComponent},
  { path: 'atendimento/:id', component: AtendimentoNovoComponent},
  { path: 'atendimento/imprimir/:id', component: AtendimentoImprimirComponent},

  //Telas Medicamentos
  {path: 'medicamento', component:MedicamentoComponent},
  {path: 'medicamento/novo', component: MedicamentoNovoComponent},

  //Telas Profissões
  {path: 'profissao', component:ProfissaoComponent},
  {path: 'profissao/novo', component: ProfissaoNovoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }