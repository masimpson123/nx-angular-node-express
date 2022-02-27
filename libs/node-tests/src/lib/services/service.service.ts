import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  auth(domain = 'http://localhost:3000', path = '/auth') {
    console.log("AUTH!");
    this.http.get<Auth>(domain + path).subscribe((res: Auth) => {
      localStorage.setItem("Authorization",res.token);
    });
  }

  nasa(domain = 'http://localhost:3000', path = '/nasa'): Observable<unknown> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: localStorage.getItem("Authorization") ?? "no-token",
      })
    };
    return this.http.get(domain + path, httpOptions);
  }
}

interface Auth {
  token:string;
}
