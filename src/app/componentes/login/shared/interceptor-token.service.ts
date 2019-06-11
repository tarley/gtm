import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Injectable()
export class InterceptorToken implements HttpInterceptor {

    constructor(private auth: AuthService, private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.router.url != '/') {
            request = request.clone({
                setHeaders: {
                    token: this.getToken()
                }
            });
        }
        return next.handle(request);
    }

    private getToken() {
        return this.auth.getToken().length > 0 ? this.auth.getToken() : '';
    }



}