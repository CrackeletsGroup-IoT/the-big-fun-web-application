import { Component } from '@angular/core';


import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {UsersService} from "../../services/users.service";
import {Organizer} from "../../model/organizer";
import {User} from "../../model/user";
import {Router} from "@angular/router";
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

  users = <any> []
  constructor(private userService:UsersService,private router: Router) {  }
  createUser(){
    this.addRole();
    this.saveUser();
    this.router.navigate(['/signIn']);
  }
  saveUser(){
    this.userService.addUser(this.user).subscribe(() => {
      console.log("Object:", this.user);

      this.user = {} as User;

    });
  }
  addRole(){
    this.user.roles=[this.userSelected.toString()];
  }

}
