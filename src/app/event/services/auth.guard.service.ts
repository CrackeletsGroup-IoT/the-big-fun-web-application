import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private router:Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    //si no hay token y requiere una autenticacion, se va al login

    console.log(localStorage.getItem('token'))
    console.log(next.data['requiresAuth'])

    if (localStorage.getItem('token') ==null && next.data['requiresAuth']) {
      this.router.navigate(['/signIn']);
      return false;
    }
    return true;
  }
}
