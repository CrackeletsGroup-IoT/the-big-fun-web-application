import { Component } from '@angular/core';


import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {UsersService} from "../../services/users.service";
import {Organizer} from "../../model/organizer";
import {User} from "../../model/user";
import {Router} from "@angular/router";
import {OrganizerService} from "../../services/organizer.service";
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

  user= {} as User

  organizer={
    userName:'',
    name:'',
    email: ''
  }

  users = <any> []
  constructor(private userService:UsersService,private router: Router, private organizerService:OrganizerService) {  }
  createUser(){
    this.addRole();
    this.saveUser();
    this.router.navigate(['/signIn']);
  }
  saveUser(){
    this.userService.addUser(this.user).subscribe(() => {
      console.log("Object:", this.user);
      if (this.userSelected== 'ROLE_ORGANIZER'){
        this.createOrgnizer();
      }else{
        this.createAttendee();
      }

      this.user = {} as User;

    });

  }
  addRole(){
    this.user.roles=[this.userSelected.toString()];
  }
  createOrgnizer(){
    this.organizer.userName= this.user.username;
    this.organizer.name= this.user.username;
    this.organizer.email= this.user.email;
    console.log("organizer", this.organizer);
    this.organizerService.createOrganizer(this.organizer).subscribe(response => {
        console.log("initialobject:", this.organizer)
        console.log("organizer:", response);
      },
      error => {
        console.error("Error create organizer:", error);
        alert("error to create organizer");
      });
  }
  createAttendee(){
    this.organizer.userName= this.user.username;
    this.organizer.name= this.user.username;
    this.organizer.email= this.user.email;
    console.log("organizer", this.organizer);
    this.organizerService.createAttendee(this.organizer).subscribe(response => {
        console.log("initialobject:", this.organizer)
        console.log("organizer:", response);
      },
      error => {
        console.error("Error create attedee:", error);
        alert("error to create attendee");
      });
  }
}
