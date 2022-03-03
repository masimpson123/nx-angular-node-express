import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ServiceService } from '../services/service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: ServiceService) { }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Intercept!");
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if(err.status === 401) {
          console.log("Please log in!");
        }
        throw (err.message);
        }));
  }
}
