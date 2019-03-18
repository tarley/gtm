import { AuthService } from './../componentes/login/shared/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean {
    
    if(this.authService.isUsuarioAutenticado()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
