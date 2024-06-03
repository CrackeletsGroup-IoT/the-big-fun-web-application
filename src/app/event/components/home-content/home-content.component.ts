import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../services/events.service";
import {OrganizerService} from "../../services/organizer.service";
//import { Event } from '../thebigfun/models/event.model';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  events=<any> [];

  //para que funcione el icono de cargando
  loading= true;

  constructor(private eventService:EventsService,private organizerService:OrganizerService) {

    if (localStorage.getItem('organizerId') == null && localStorage.getItem('role')== 'ROLE_ORGANIZER'){

      this.organizerService.findOrganizerByName(localStorage.getItem('username')).subscribe(
        value=> localStorage.setItem('organizerId', value.id));

      console.log("organizer id en home: " + localStorage.getItem('organizerId'));

    }
  }

  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents() {
    this.eventService.getAll().subscribe((response: any) => {
      if (Array.isArray(response.content)) {
        this.events = response.content;

        this.loading=false;

        console.log(this.events);
      } else {
        console.error('Invalid response format: events array not found');
      }
    });
  }

}
