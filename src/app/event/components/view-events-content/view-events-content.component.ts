import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../services/events.service";

@Component({
  selector: 'app-view-events-content',
  templateUrl: './view-events-content.component.html',
  styleUrls: ['./view-events-content.component.css']
})
export class ViewEventsContentComponent implements OnInit{
  events:Array<any> = []

  constructor(private eventService:EventsService) {
  }


  ngOnInit(): void {
    this.getAllEvents();
  }


  getAllEvents() {
    this.eventService.getAll().subscribe((response:any)=>{
      this.events=response;
      console.log(this.events)
    })
  }


}
