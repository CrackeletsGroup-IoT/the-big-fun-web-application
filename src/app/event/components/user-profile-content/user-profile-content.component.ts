import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../services/events.service";
import {User} from "../../model/user";

@Component({
  selector: 'app-user-profile-content',
  templateUrl: './user-profile-content.component.html',
  styleUrls: ['./user-profile-content.component.css']
})
export class UserProfileContentComponent implements OnInit{



  img="https://cdn.discordapp.com/attachments/741537138809634828/1102793369006129182/322322273_892783068561159_928475573701318767_n.jpg";
  user=[];
  name="";
  email="";
  phone="";
  id="";
  currentAttendee = {} as User

  constructor(private eventService: EventsService) {
  }
  ngOnInit() {
    this.getAttendeById();
  }
  getAttendeById(){
    this.eventService.getAttendeeById(1).subscribe((response: any) => {
      this.currentAttendee = response;
      console.log(this.currentAttendee);
    });

  }
}
