import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceService } from './services/service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    ServiceService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
})
export class NodeTestsModule {}
