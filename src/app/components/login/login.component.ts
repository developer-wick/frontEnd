import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/login/auth.service";
import { Router } from "@angular/router";

//import { Swal } from 'sweetalert2/dist/sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  user = {
    usuario:'',
    password:''
  }

  constructor(
    private authService : AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }
  
  login () {
    /*
    this.authService.login(this.user)
    .subscribe (
      res => {console.log('RESPUESTA DE API -> '+JSON.stringify(res));},
      err => {console.log('ERROR DE API -> '+JSON.stringify(err))}
    );*/
    
      if (this.user.usuario.trim() === '') {Swal.fire({
        title: "Debe ingresar un nombre de usuario",
        icon: "warning",
        showConfirmButton: false,
        timer: 2000,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInDown
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutUp
            animate__faster
          `
        }
      });}
    localStorage.setItem('token',this.user.usuario.trim());
    this.router.navigate(['/principal']);
    //Swal.fire('Bienvenido! ');
  }
  
}
