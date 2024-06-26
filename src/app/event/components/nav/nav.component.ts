import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {interval} from "rxjs";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  isLoggedIn: boolean = false;
  userType ='';
  constructor( private router: Router) { }
  logout() {

    this.isLoggedIn = false;
    this.userType = ''
    this.router.navigate(['/signIn']);
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    localStorage.removeItem('role');

    localStorage.removeItem('organizerId');  //para dejar de almacnar un organizer que ya se fue
  }
  ngOnInit() {
    interval(1000).subscribe(() => {
      this.Login();

    });
  }
  Login(){
    this.isLoggedIn = true;
    this.userType = localStorage.getItem('role') as string;
  }
}
