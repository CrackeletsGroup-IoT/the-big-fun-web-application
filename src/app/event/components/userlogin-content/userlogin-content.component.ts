import { Component } from '@angular/core';
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
  userSelected='asdasdas';
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

}
