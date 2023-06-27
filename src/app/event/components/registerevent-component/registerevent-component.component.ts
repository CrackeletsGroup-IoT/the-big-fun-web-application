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
  eventId=0;
/*  eventImg= "https://www.anayainfantilyjuvenil.com/images/libros/grande/9788469833728-la-vida-es-sueno-clasicos-hispanicos.jpg"
*/

  typeTickets=[
    {name:'Estándar', code: 'est'},
    {name:'VIP', code: 'vip'}
  ]

  constructor(private eventService:EventsService) { }

  saveEvent(){
    this.eventService.create(this.event).subscribe(
      response => {
        console.log("Respuesta del evento creado:", response);
        this.eventId = response.id;
        console.log("ID del evento creado:", this.eventId);
        this.addEventToOrganizer()
      },
      error => {
        console.error("Error al crear el evento:", error);
      }
    );
    console.log("Evento : ",this.event)
    this.event={} as Event;

  }
  addEventToOrganizer(){
    const organizerId = (localStorage.getItem('userId'));
    this.eventService.addEventToOrganizer(Number(organizerId), Number(this.eventId)).subscribe(
      () => {
        // Handle the success case if necessary
        console.log("Event was added correctly");
      },
      (error: any) => {
        // Handle the error if it occurs
        console.error(error);
      }
    );
  }

}
