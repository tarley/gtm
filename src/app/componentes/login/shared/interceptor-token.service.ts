import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
  
@Injectable()
export class InterceptorToken implements HttpInterceptor {

    constructor(private auth: AuthService, private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        if (this.router.url != '/login') {
            request = request.clone({
                setHeaders: {
                    'x-access-token': this.getToken()
                }
            });
        }
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    if(this.isRespostaTokenInvalido(event)) {
                        this.auth.logout();
                    }
                }
                return event;
            }));
    }

    private getToken() {
        return this.auth.getToken().length > 0 ? this.auth.getToken() : '';
    }

    private isRespostaTokenInvalido(event) {
        return event.status == 401 ? true : false; 
    }



}