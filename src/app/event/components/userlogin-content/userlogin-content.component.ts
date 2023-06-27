import { Component } from '@angular/core';
import {Event} from "../../model/event";
import {EventsService} from "../../services/events.service";
import {AuthUser} from "../../model/AuthUser";
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
  authUser = {
    username:"Juanito",
    password:"1234"
  };
  constructor(private eventService:EventsService) { }
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

      },
      error => {
        console.error("Error de autenticación:", error);
      });


  }
}
