import { PerfilUsuario } from 'src/app/util/perfil-usuario';
import { AuthService } from './../componentes/login/shared/auth.service';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { UsuarioLogado } from '../componentes/login/shared/usuario-logado.model';

@Injectable()
export class AdministradorGuard implements CanActivate {
    
    public constructor(private authService: AuthService) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const usuarioLogado: UsuarioLogado = this.authService.getUsuarioLogado();
        if(usuarioLogado && usuarioLogado.perfil == PerfilUsuario.ADMINISTRADOR) {
            return true;
        }
        return false;
    }
    
}