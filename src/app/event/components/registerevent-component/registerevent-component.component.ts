import { Component } from '@angular/core';
import {Event} from "../../model/event";
import {EventsService} from "../../services/events.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";


@Component({
  selector: 'app-registerevent-component',
  templateUrl: './registerevent-component.component.html',
  styleUrls: ['./registerevent-component.component.css']
})
export class RegistereventComponentComponent {

  event={} as Event
  eventId=0;
  image:any;
/*  eventImg= "https://www.anayainfantilyjuvenil.com/images/libros/grande/9788469833728-la-vida-es-sueno-clasicos-hispanicos.jpg"
*/

  typeTickets=[
    {name:'Estándar', code: 'est'},
    {name:'VIP', code: 'vip'}
  ]

  constructor(private eventService:EventsService, private snackbar:MatSnackBar, private router:Router) { }

  saveEvent(){

    this.event.date = new Date(this.event.date).toISOString().split('T')[0]; // "2025-05-15"

    this.eventService.createEvent(this.event,localStorage.getItem('organizerId')).subscribe(
      response => {
        console.log("Respuesta del evento creado:", response);
        this.eventId = response.id;
        this.addFileImage(this.image);
        console.log("ID del evento creado:", this.eventId);

        this.snackbar.open("Se creó su evento exitosamente", "", {verticalPosition:'top'})

        //para que una vez crea exitosamente lo redirige al home
        this.router.navigate(['/events']);

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

  //metodo para cargar la imagen que queiro añadir a mi evento al crearlo
  addFileImage(myImage:any){
    this.eventService.uploadFile(myImage, this.eventId);
  }

  //funcion para "atrapar" bien el archivo de imagen
  onFileChange(event: any): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) { //si existe
      this.image = input.files[0]; //en realidad solo hay un elemento
    }
  }

}
