import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EventsService} from "../../services/events.service";
import {Event} from "../../model/event";
import {isEmpty} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-eventdetails-component',
  templateUrl: './eventdetails-component.component.html',
  styleUrls: ['./eventdetails-component.component.css']
})
export class EventdetailsComponentComponent implements  OnInit{


  constructor(private router:Router,private route:ActivatedRoute, private eventService:EventsService,private http: HttpClient) {

    this.getAttendeeId();
  }

  events:any;
  currentEvent: any;
  indice:number=0;
  name= '';
  attendeeId=0;

  //para el simbolo de cargando
  loading=true;

  ngOnInit(): void {
    this.indice=this.route.snapshot.params['index'];
    console.log(this.indice)
    this.getAllEvents();

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
    this.currentEvent = this.events.find((event:any)=>event.id==this.indice);
    console.log("evento: " + this.currentEvent);

    this.loading=false;
  }


  buy(){

    const params={
      eventId:this.currentEvent.id,
      attendeeId:this.attendeeId,
    }

    this.router.navigate(['buyTickets'], {queryParams:params});
  }
  addAttendeeToEvent(){
    this.eventService.addAttendeeToEvent(Number(localStorage.getItem('eventId')), this.attendeeId).subscribe(
      () => {
        console.log("Attendee was added correctly");
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  getAttendeeId(){
    this.eventService.findAttendeeByName(String(localStorage.getItem('username'))).subscribe(
      (response: any) => {
        this.attendeeId = response.id;
        this.addAttendeeToEvent()
        console.log("Attendee ID:", this.attendeeId);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

}
