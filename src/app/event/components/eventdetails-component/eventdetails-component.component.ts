import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EventsService} from "../../services/events.service";
import {Event} from "../../model/event";
import {isEmpty} from "rxjs";

@Component({
  selector: 'app-eventdetails-component',
  templateUrl: './eventdetails-component.component.html',
  styleUrls: ['./eventdetails-component.component.css']
})
export class EventdetailsComponentComponent implements  OnInit{


  constructor(private router:Router,private route:ActivatedRoute, private eventService:EventsService) {
  }

  nameEvent= "Chatarrita"
  img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqx5gurXNgoiEx8PNnw-AJm7bJz3F1-TLpgA&usqp=CAU"
  date= "12/10/2023"
  hour= "8pm"
  cost= "20$"
  capacity= "200"
  location= "Av. las fresias 158 la molina"

  events=<any> [];

  currentEvent={} as Event

  indice:number=0;

  ngOnInit(): void {
    this.indice=this.route.snapshot.params['index'];
    console.log(this.indice)
    this.getAllEvents();

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

  findById(index:number){
    this.currentEvent = this.events[index]
    localStorage.setItem('eventId', this.currentEvent.id.toString());
    console.log("id del evento", localStorage.getItem('eventId'));
  }

  buy(){
    console.log("Buy : ", this.events)
    //this.indice=this.route.snapshot.params['index'];
    //console.log(this.indice);
    this.findById(this.indice)
    console.log(" Current Event : ", this.currentEvent)
  }

}
