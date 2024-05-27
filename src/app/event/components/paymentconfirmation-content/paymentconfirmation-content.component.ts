import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EventsService} from "../../services/events.service";

@Component({
  selector: 'app-paymentconfirmation-content',
  templateUrl: './paymentconfirmation-content.component.html',
  styleUrls: ['./paymentconfirmation-content.component.css']
})
export class PaymentconfirmationContentComponent implements OnInit{

  eventId:any;
  attendeeId:any;
  events:any;
  currentEvent:any;

  eventImg:any;
  dataSource: any;
  displayedColumns: any;

  constructor(private route:ActivatedRoute,private eventService:EventsService) {
  }

  getAllEvents() {
    this.eventService.getAll().subscribe((response: any) => {
      if (Array.isArray(response.content)) {
        this.events = response.content;
        this.findById();
        console.log(this.events);
      } else {
        console.error('Invalid response format: events array not found');
      }
    });
  }

  findById(){
    this.currentEvent = this.events.find((event:any)=>event.id==this.eventId);
    console.log("evento: " + this.currentEvent);

    this.eventImg= this.currentEvent.imageUrl;   //trae laimagen del back
    this.dataSource=[
      {date: this.currentEvent.date,hour:this.currentEvent.hour, nameEvent:this.currentEvent.name}
    ]

  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params=>{
      this.eventId=params['eventId'];
      this.attendeeId=params['attendeeId'];
    });

    this.getAllEvents();

    this.displayedColumns = ['Fecha', 'Nombre'];
  }
}

