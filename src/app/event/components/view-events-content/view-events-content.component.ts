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
  constructor(private eventService:EventsService) {
  }


  ngOnInit(): void {
    this.getAllEvents();
    this.getEventsFromOrganizers();
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
    this.eventService.getEventsInOrganizers(1).subscribe((response: any) => {
      if (Array.isArray(response.content)) {
        this.eventsId = response.content.map((event: any) => event.eventId);
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
    this.eventService.getEventsInAttendee(2).subscribe((response: any) => {
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
}
