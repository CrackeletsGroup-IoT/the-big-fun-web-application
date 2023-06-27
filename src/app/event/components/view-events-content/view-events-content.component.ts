import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../services/events.service";

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

  constructor(private eventService:EventsService) {
  }


  ngOnInit(): void {
    this.getAllEvents();

    if(localStorage.getItem('role')=='ROLE_USER'){
      this.getAttendeeId();

    }else{
      this.getOrganizerId();
    }

  }


  getAllEvents() {
    this.eventService.getAll().subscribe((response: any) => {
      if (Array.isArray(response.content)) {
        this.events = response.content;
        console.log(this.events);
      } else {
        console.error('Invalid response format: events array not found');
      }
    });
  }
  getEventsFromOrganizers(){
    console.log('organizer id', this.organizerId)
    this.eventService.getEventsInOrganizers(this.organizerId).subscribe((response: any) => {
      if (Array.isArray(response.content)) {
        this.eventsId = response.content.map((event: any) => event.eventId);
        console.log(response);
        console.log("id of events in organizers",this.eventsId);
        this.filterEvents();
      }
    });
  }
  filterEvents() {
    this.eventsFiltered = this.events.filter(event => this.eventsId.includes(event.id));
    console.log('Filtered events:', this.eventsFiltered);
  }
  getEventsFromAttendee(){
    this.eventService.getEventsInAttendee(this.attendeeId).subscribe((response: any) => {
      if (Array.isArray(response.content)) {
        this.eventsIdAttendees = response.content.map((event: any) => event.event.id);
        console.log("IDs of events in attendees:", this.eventsIdAttendees);
        this.filterEventsAttendee();
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
        console.log("Attendee ID:", this.attendeeId);
        this.getEventsFromAttendee();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  getOrganizerId(){
    this.eventService.findOrganizerByName(String(localStorage.getItem('username'))).subscribe(
      (response: any) => {
        this.organizerId = response.id;
        console.log("Organizer ID:", this.organizerId);
        this.getEventsFromOrganizers()
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
