import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { AuthService } from './auth.service';

@Directive({ selector: '[appHasRole]' })
export class HasRoleDirective {


    constructor(private authService: AuthService, private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {}


    @Input() set appHasRole(perfis: string[]) {
        const perfilLogado = this.authService.getPerfilUsuario();

        let exibe = false;

        perfis.forEach(perfil => {
            if(perfil === perfilLogado) {
                exibe = true;
                this.viewContainerRef.createEmbeddedView(this.templateRef);
            }
        });

        if (!exibe) {
            this.viewContainerRef.clear();
        }
    }

}