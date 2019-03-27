import { AuthGuard } from './guard/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioNovoComponent } from './componentes/usuario/usuario-novo/usuario-novo.component';
import { LoginComponent } from './componentes/login/login.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  
  //Rotas Usuario
  {path: 'usuario/novo', component: UsuarioNovoComponent, canActivate: [AuthGuard]},
  {path: 'usuario', component: UsuarioComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
