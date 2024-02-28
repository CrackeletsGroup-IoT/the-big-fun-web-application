import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate{

  constructor(private router:Router) {
  }

  canActivate(): boolean {

    //si no hay token y requiere una autenticacion, se va al login
    if (localStorage.getItem('token') != null) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
