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
    usuario: '',
    password: ''
  }
  

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  login() {
    
    this.authService.login(this.user)
      .subscribe(
        res => {
          console.log('RESPUESTA DE API -> ' + JSON.stringify(res));
          //console.log('tk -> ' + res.tk);
          //console.log('tk -> ' + res.usr);
          this.respuesta(res);
        },
        err => { console.log('ERROR DE API -> ' + JSON.stringify(err)) }
      );
    
    if (this.user.usuario.trim() === '') {
      Swal.fire({
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
      });
    }
    //localStorage.setItem('token', this.user.usuario.trim());
    //this.router.navigate(['/principal']);
    //Swal.fire('Bienvenido! ');
  }

  respuesta(res){
    //console.log('Token -> '+res.tk);
    console.log('Codigo -> '+res.usr);
    console.log('Mensaje -> '+res.msg);
    if (res.usr === 1) {
      localStorage.setItem('token', res.tk);
      this.router.navigate(['/principal']);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: res.msg,
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      Swal.fire({
        title: res.msg,
        icon: "warning",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
    }
  }

}
