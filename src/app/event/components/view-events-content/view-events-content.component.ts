import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../services/events.service";
import {OrganizerService} from "../../services/organizer.service";
import {EventAtendeeService} from "../../services/event-atendee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-events-content',
  templateUrl: './view-events-content.component.html',
  styleUrls: ['./view-events-content.component.css']
})
export class ViewEventsContentComponent implements OnInit{
  events:Array<any> = []
  eventsId:Array<any>=[]
  eventsIdAttendees:Array<any>=[]
  eventsFiltered:Array<any>=[]
  attendeeId=0;
  organizerId=0;
  userRole: string | null = '';

  constructor(private router:Router,private eventService:EventsService, private organizerService:OrganizerService,private eventAtendeeService:EventAtendeeService) {
  }


  ngOnInit(): void {
    //this.getAllEvents();
    this.userRole = localStorage.getItem('role');

    if(this.userRole=='ROLE_USER'){
      this.getAttendeeId();

    }else{
      this.getOrganizerId();
    }

  }


  getAllEvents(callback: () => void) {
    this.eventService.getAll().subscribe((response: any) => {
      if (Array.isArray(response.content)) {
        this.events = response.content;
        callback(); // Llamamos la función de filtrado al terminar de cargar eventos
      } else {
      }
    });
  }
  getEventsFromOrganizers() {
    console.log('Organizer ID:', this.organizerId);
    this.eventService.findEventsByOrganizerId(this.organizerId).subscribe((response: any) => {
      if (Array.isArray(response.content)) {
        this.eventsFiltered = response.content;
        console.log('Filtered events (by organizer):', this.eventsFiltered);
      } else {
        console.error('response.content is not an array', response);
      }
    });
  }

  filterEvents() {
    this.eventsFiltered = this.events.filter(event => this.eventsId.includes(event.id));
    console.log('Filtered events:', this.eventsFiltered);
  }
  getEventsFromAttendee(){
    this.eventAtendeeService.getEventsBuyAttendee(this.attendeeId).subscribe((response: any) => {
      if (Array.isArray(response.content)) {
        this.eventsFiltered = response.content;
        console.log("Filtered events (by attendee):", this.eventsFiltered);
      }else {
        console.error('response.content is not an array', response);
      }
    });
  }
  filterEventsAttendee() {
    this.eventsFiltered = this.events.filter(event => this.eventsIdAttendees.includes(event.id));
    console.log('Filtered events:', this.eventsFiltered);
  }
  getAttendeeId(){
    this.eventService.findAttendeeByName(String(localStorage.getItem('username'))).subscribe(
      (response: any) => {
        this.attendeeId = response.id;
        //console.log("Attendee ID:", this.attendeeId);
        this.getAllEvents(() => this.getEventsFromAttendee());
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  getOrganizerId(){
    this.organizerService.findOrganizerByName(String(localStorage.getItem('username'))).subscribe(
      (response: any) => {
        this.organizerId = response.id;
        //esto porque ahora no pasa por /home y por ello no esta guardando el id cuando es organizer
        localStorage.setItem('organizerId',String(this.organizerId))
        //console.log("Organizer ID:", this.organizerId);
        this.getAllEvents(() => this.getEventsFromOrganizers());
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  seeBuyers(eventId:any){

    const params={
      eventId:eventId,
    }

    this.router.navigate(['seebuyers'], {queryParams:params});
  }
}
