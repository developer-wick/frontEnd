
import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from '../login/auth.service';
import { Observable } from 'rxjs/internal/Observable';



@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  

  constructor(
    private authService:AuthService,
    private injector: Injector
  ) { }

  /*
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    //return next.handle(this.addAuthToken(request));
    
    this.authService = this.injector.get(AuthService); // get it here within intercept
    const authRequest = request.clone({
      setHeaders :{
        Authorization: `Bearer ${this.authService.getToken()}`
      }
      //headers: request.headers.set('Authorization', this.authService.getToken())
    });
    return next.handle(authRequest);

   }
    
  }*/
  
  
  
  intercept(req, next): Observable<HttpEvent<any>>{
    //console.log('Token-Interceptor --> '+this.authService.getToken());
    
    const tokenizeReq = req.clone({
      setHeaders :{
        Authorization: `Bearer ${this.authService.getToken()}`
      }
    });
    console.log('Header --> '+tokenizeReq);
    return next.handle(tokenizeReq);
  }

    addAuthToken(request: HttpRequest<any>) {
      const token = this.authService.getToken();
      /*let token = '';
      setTimeout(x => {
        token = this.authService.getToken();
      },10000) */
      return request.clone({
          setHeaders: {
            Authorization: `Basic ${token}`
          }
      })
    }
  
}
