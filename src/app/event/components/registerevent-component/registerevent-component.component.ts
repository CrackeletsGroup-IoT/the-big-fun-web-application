import { Component } from '@angular/core';
import {Event} from "../../model/event";
import {EventsService} from "../../services/events.service";

@Component({
  selector: 'app-registerevent-component',
  templateUrl: './registerevent-component.component.html',
  styleUrls: ['./registerevent-component.component.css']
})
export class RegistereventComponentComponent {

  event={} as Event

/*  eventImg= "https://www.anayainfantilyjuvenil.com/images/libros/grande/9788469833728-la-vida-es-sueno-clasicos-hispanicos.jpg"
*/

  typeTickets=[
    {name:'Estándar', code: 'est'},
    {name:'VIP', code: 'vip'}
  ]

  constructor(private eventService:EventsService) { }

  saveEvent(){
    this.eventService.create(this.event).subscribe();
    console.log("Evento : ",this.event)
    this.event={} as Event;
  }


}
