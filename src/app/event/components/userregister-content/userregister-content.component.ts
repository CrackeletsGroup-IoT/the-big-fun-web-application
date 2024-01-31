import { Component } from '@angular/core';


import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {AttendeeService} from "../../services/attendee.service";
import {Organizer} from "../../model/organizer";
import {Attendee} from "../../model/attendee";
import {Router} from "@angular/router";
import {OrganizerService} from "../../services/organizer.service";
import {UserSignUp} from "../../model/userSignUp";
import {AutorizationService} from "../../services/autorization.service";
interface type {
  value: string;
  viewValue: string;
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-userregister-content',
  templateUrl: './userregister-content.component.html',
  styleUrls: ['./userregister-content.component.css']
})

export class UserregisterContentComponent {
  userSelected='';
  typeusers: type[] = [
    {value: 'ROLE_ORGANIZER', viewValue: 'Organizer'},
    {value: 'ROLE_USER', viewValue: 'Attendee'}
  ];
    emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  constructor(
    private attendeeService:AttendeeService,
    private router: Router,
    private organizerService:OrganizerService,
    private autorizationService: AutorizationService) {

    this.user={} as UserSignUp;
    this.name='';
  }
  name:string;
  user:UserSignUp;


  createUser(){
    this.addRole();
    this.saveUser();
    this.router.navigate(['/signIn']);
  }

  //se creo el usuario usando el metodo post(signUp) del servicio Autorization
  saveUser(){
    this.autorizationService.signUp(this.user).subscribe(() => {
      console.log("Object:", this.user);
      if (this.userSelected=== 'ROLE_ORGANIZER'){
        this.createOrganizer();
      }else{
        this.createAttendee();
      }
      this.user = {} as UserSignUp;
    });
  }

  addRole(){
    this.user.roles=[this.userSelected.toString()];
  }

  //se creo el organizer usando el metodo post(template) de baseService, el cual va al endpoint especifico de organizer
  createOrganizer(){

    let organizer:Organizer={
      id:0, userName:this.user.username, name:this.name, email: this.user.email
    };

    console.log("organizer", organizer);
    this.organizerService.create(organizer).subscribe(response => {
        console.log("initialObject:", organizer)
        console.log("organizer:", response);
      },
      error => {
        console.error("Error create organizer:", error);
        alert("error to create organizer");
      });
  }

  //se creo el attendee usando el metodo post(template) de baseService, el cual va al endpoint especifico de attendee
  createAttendee(){

    let attendee:Attendee={
      id:0, userName:this.user.username, name:this.name, email: this.user.email
    };

    console.log("attendee", attendee);
    this.attendeeService.create(attendee).subscribe(response => {
        console.log("initialObject:", attendee)
        console.log("attendee:", response);
      },
      error => {
        console.error("Error create attendee:", error);
        alert("error to create attendee");
      });
  }
}
