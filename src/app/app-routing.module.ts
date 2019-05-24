import { AtendimentoNovoComponent } from './componentes/atendimento/atendimento-novo/atendimento-novo.component';
import { AtendimentoComponent } from './componentes/atendimento/atendimento.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { LoginComponent } from './componentes/login/login.component';
import { UsuarioNovoComponent } from './componentes/usuario/usuario-novo/usuario-novo.component';
import { PacienteComponent } from './componentes/paciente/paciente.component';
import { PacienteNovoComponent } from './componentes/paciente/paciente-novo/paciente-novo.component';
import { AtendimentoImprimirComponent } from './componentes/atendimento/atendimento-imprimir/atendimento-imprimir.component';
import { AtendimentoVisualizarComponent } from './componentes/atendimento/atendimento-visualizar/atendimento-visualizar.component';
import { InstituicaoComponent } from './componentes/instituicao/instituicao.component';
import { NovaInstituicaoComponent } from './componentes/instituicao/nova-instituicao/nova-instituicao.component';
import { MedicamentoComponent } from './componentes/medicamento/medicamento.component';
import { NovoMedicamentoComponent } from './componentes/medicamento/novo-medicamento/novo-medicamento.component';

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
  { path: 'atendimento/visualizar/:id', component: AtendimentoVisualizarComponent},
  { path: 'atendimento/imprimir/:id', component: AtendimentoImprimirComponent},

  //Telas Instituições
  {path: 'instituicao', component: InstituicaoComponent},
  {path: 'instituicao/novo', component: NovaInstituicaoComponent},

    //Telas Medicamento
    {path: 'medicamento', component: MedicamentoComponent},
    {path: 'medicamento/novo', component: NovoMedicamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }