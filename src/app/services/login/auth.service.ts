import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

import { environment } from "../../../environments/environment";
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  pathUrl = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(user) {
    //return user;
    return this.http.post<any>(this.pathUrl + 'login', user);
  }

  async loginA(user) {
    //return this.http.post<any>(this.pathUrl+'login', user).toPromise();
    /*
    return new Observable((subscriber) => {
      this.http.post<any>(this.pathUrl+'login', user).subscribe(data => {
          //some stuff
          console.log("Observable --> "+JSON.stringify(data));
          localStorage.setItem('token',data.tk);
          subscriber.next(data);
      }), () => subscriber.error();
    });*/

    let response = await this.http.post<any>(this.pathUrl+'login', user).toPromise();
    
    console.log("Respuesta de Await --> "+JSON.stringify(response));
    return response;

  }


  autentica() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    this.pathUrl = environment.dirUrl;
    //console.log('URL API REST --> '+this.pathUrl);
    //console.log('Get Token Auth Service --> '+localStorage.getItem('token'));
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  prueba() {
    return this.http.get<any>(this.pathUrl + 'prueba');
  }

}
