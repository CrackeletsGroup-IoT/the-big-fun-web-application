import { Component } from '@angular/core';


import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {User} from "../../model/user";
import {UsersService} from "../../services/users.service";

/** Error when invalid control is dirty, touched, or submitted. */
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

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  user= {} as User

  constructor(private userService:UsersService) {  }

  saveUser(){
    this.userService.create(this.user).subscribe();
    console.log("Object : ", this.user)
    this.user={} as User

  }

}
