import { Component } from '@angular/core';
import {Event} from "../../model/event";
import {EventsService} from "../../services/events.service";
import {UserSignIn} from "../../model/userSignIn";
import {Router} from "@angular/router";
import {AutorizationService} from "../../services/autorization.service";
import {UserSignInResponse} from "../../model/user-sign-in-response";
interface type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-userlogin-content',
  templateUrl: './userlogin-content.component.html',
  styleUrls: ['./userlogin-content.component.css']
})
export class UserloginContentComponent {

  authUser: UserSignIn;
  userResponse: UserSignInResponse;
  constructor(private autorizationService:AutorizationService, private router: Router) {
    this.authUser={} as UserSignIn;
    this.userResponse={} as UserSignInResponse;

  }

  /* typeusers: type[] = [
    {value: 'ROLE_ORGANIZER', viewValue: 'Organizer'},
    {value: 'ROLE_USER', viewValue: 'Attendee'}
  ];  */

  Authentication(){

    this.autorizationService.signIn(this.authUser).subscribe(response => {
        console.log("Respuesta de autenticación:", response);
        this.userResponse = response as UserSignInResponse;
        localStorage.setItem('userId',String(this.userResponse.id));
        localStorage.setItem('username',String(this.userResponse.username));
        localStorage.setItem('role',String(this.userResponse.roles[0]));
        localStorage.setItem('token',String(this.userResponse.token));
        console.log(localStorage.getItem('token'));

        this.router.navigate(['/home']);
      },
      error => {
        console.error("Error de autenticación:", error);
        alert("User or Password incorrect");
      });
  }



}
