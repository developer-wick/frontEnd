import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  pathUrl = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login (user) {
    //return user;
    return this.http.post<any>(this.pathUrl+'auth', user);
  }

  autentica () {
    return !!localStorage.getItem('token');
  }

  getToken () {
    this.pathUrl = environment.dirUrl;
    //console.log('URL API REST --> '+this.pathUrl);
    //console.log(localStorage.getItem('token'));
    return localStorage.getItem('token');
  }

  logout () {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  prueba () {
    return this.http.get<any>(this.pathUrl+'prueba');
  }
  
}
