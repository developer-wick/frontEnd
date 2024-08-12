import { Component } from '@angular/core';
import { AuthService } from "./services/login/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor (
    private authService:AuthService
  ) {}

  title = 'TransApp';

  myTopnav: any;
  menu: any;
  home: any;
  //pestaña catalogos
  m1l1: any;
  m1l2: any;
  m1l3: any;
  m1l4: any;
  m1l5: any;
  m1l6: any;
  m1l7: any;
  m1l8: any;
  //pestaña procesos
  m2l1: any;
  m2l2: any;
  m2l3: any;
  m2l4: any;

  m3l1: any;
  m3l2: any;

  ngOnInit(){
    console.log('Inicializando App');

    this.myTopnav = true;
    this.menu = true;
    this.home = true;
    this.m1l1 = true;
    this.m1l2 = true;
    this.m1l3 = true;
    this.m1l4 = true;
    this.m1l5 = true;
    this.m1l6 = true;
    this.m1l7 = true;
    this.m1l8 = true;

    this.m2l1 = true;
    this.m2l2 = true;
    this.m2l3 = true;
    this.m2l4 = true;


    this.m3l1 = true;
    this.m3l2 = true;
    
  }

  /*
  myFunction () {
    var x = document.getElementById("myTopnav");
    
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }*/

  
  logout () {
    return this.authService.logout();
  }

  
  getToken(){
    //alert("OBTENER TOKEN!"+this.authService.getToken);
    //console.log('OBTENER TOKEN..!'+this.authService.getToken());
    if (this.authService.getToken() === null || this.authService.getToken().trim() === '' ) {return false;}
    else {return true;}
    //this.myTopnav = false;
    //return this.authService.getToken();
    //return false;
  }
  


}
