import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../services/events.service";
import {OrganizerService} from "../../services/organizer.service";
import {EventAtendeeService} from "../../services/event-atendee.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-see-buyers-component',
  templateUrl: './see-buyers-component.component.html',
  styleUrls: ['./see-buyers-component.component.css']
})
export class SeeBuyersComponentComponent implements OnInit{

  attendeesFiltered:Array<any>=[]
  eventId:any;
  constructor(private eventAtendeeService:EventAtendeeService,private route:ActivatedRoute) {

    this.route.queryParams.subscribe(params=>{
      this.eventId=params['eventId'];
    })
  }
  ngOnInit(): void {

    this.getAttendeesBuyer();
  }

  getAttendeesBuyer(){
    this.eventAtendeeService.getAtendeesBuyer(this.eventId).subscribe((response: any) => {
      if (Array.isArray(response.content)) {
        this.attendeesFiltered = response.content;
        console.log("Filtered events (by attendee):", this.attendeesFiltered);
      }else {
        console.error('response.content is not an array', response);
      }
    });
  }

}
