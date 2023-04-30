import { Component } from '@angular/core';

@Component({
  selector: 'app-userlogin-content',
  templateUrl: './userlogin-content.component.html',
  styleUrls: ['./userlogin-content.component.css']
})
export class UserloginContentComponent {

  users: Array<any> = [
    {
      user: null,
      password:null,
    }
  ];

}
