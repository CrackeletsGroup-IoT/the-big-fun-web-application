import { Component } from '@angular/core';
import {Event} from "../../model/event";
import {EventsService} from "../../services/events.service";
import {AuthUser} from "../../model/AuthUser";
import {Router} from "@angular/router";
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

        this.router.navigate(['/home']);
      },
      error => {
        console.error("Error de autenticación:", error);
        alert("User or Password incorrect");
      });
  }

}
