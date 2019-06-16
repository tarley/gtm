import { AdministradorGuard } from './guard/administrador.guard';
import { HomeComponent } from './componentes/home/home.component';
import { AuthGuard } from './guard/auth.guard';
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
import { ExcetoAcademicoGuard } from './guard/exceto-academico.guard';

const routes: Routes = [
  //Rotas Login
  { path: 'login', component: LoginComponent },

  //Rotas Home
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },

  //Rotas Usuário
  { path: 'usuario/novo', component: UsuarioNovoComponent, canActivate: [AuthGuard, ExcetoAcademicoGuard] },
  { path: 'usuario/:id', component: UsuarioNovoComponent, canActivate: [AuthGuard, ExcetoAcademicoGuard] },
  { path: 'usuario', component: UsuarioComponent, canActivate: [AuthGuard, ExcetoAcademicoGuard] },

  //Rotas Paciente
  { path: 'paciente', component: PacienteComponent, canActivate: [AuthGuard] },
  { path: 'paciente/novo', component: PacienteNovoComponent, canActivate: [AuthGuard] },
  { path: 'paciente/:id', component: PacienteNovoComponent, canActivate: [AuthGuard] },

  //Rotas Atendimento
  { path: 'atendimento', component: AtendimentoComponent, canActivate: [AuthGuard] },
  { path: 'atendimento/novo/:idPaciente', component: AtendimentoNovoComponent, canActivate: [AuthGuard] },
  { path: 'atendimento/:id', component: AtendimentoNovoComponent, canActivate: [AuthGuard] },
  { path: 'atendimento/visualizar/:id', component: AtendimentoVisualizarComponent, canActivate: [AuthGuard] },
  { path: 'atendimento/imprimir/:id', component: AtendimentoImprimirComponent, canActivate: [AuthGuard] },

  //Telas Instituições
  {path: 'instituicao', component: InstituicaoComponent, canActivate: [AuthGuard, AdministradorGuard] },
  {path: 'instituicao/novo', component: NovaInstituicaoComponent, canActivate: [AuthGuard, AdministradorGuard] },

    //Telas Medicamento
    {path: 'medicamento', component: MedicamentoComponent, canActivate: [AuthGuard, ExcetoAcademicoGuard] },
    {path: 'medicamento/novo', component: NovoMedicamentoComponent, canActivate: [AuthGuard, ExcetoAcademicoGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }