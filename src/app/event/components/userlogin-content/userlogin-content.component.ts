import { Component } from '@angular/core';
import {Event} from "../../model/event";
import {EventsService} from "../../services/events.service";
import {AuthUser} from "../../model/AuthUser";
import {Router} from "@angular/router";
import {User} from "../../model/user";
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
  userSelected='';
  errorMessage='';
  authUser = {
    username: '',
    password: ''

  };
  userResponse= { } as User;
  constructor(private eventService:EventsService, private router: Router) { }

  typeusers: type[] = [
    {value: 'ROLE_ORGANIZER', viewValue: 'Organizer'},
    {value: 'ROLE_USER', viewValue: 'Attendee'}
  ];
  users: Array<any> = [
    {
      user: null,
      password:null,
    }
  ];
  Authentication(){

    this.eventService.authenticateUser(this.authUser).subscribe(response => {
        console.log("Respuesta de autenticación:", response);
        this.userResponse = response as User;
        localStorage.setItem('role', this.userResponse.roles[0]);
        localStorage.setItem('userId',String(this.userResponse.id));
        localStorage.setItem('username',String(this.userResponse.username));
        console.log(localStorage.getItem('role'));
        console.log(localStorage.getItem('userId'));


        this.router.navigate(['/home']);
      },
      error => {
        console.error("Error de autenticación:", error);
        alert("User or Password incorrect");
      });
  }

}
