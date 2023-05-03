import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../services/events.service";
//import { Event } from '../thebigfun/models/event.model';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  //events =[]  // esto da error
  events=<any> [];

  /*
  En un inicio lo declare mal y me daba error
  tener cuidado,
  otra forma de declarar un array es  events:Array<any> =[];
  */

    /*
    {
      name : 'Chatarrita',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqx5gurXNgoiEx8PNnw-AJm7bJz3F1-TLpgA&usqp=CAU'
    },
    {
      name: "Japanese expressions",
      img: 'https://www.curriculumnacional.cl/estudiante/621/articles-144873_imagen_portada.thumb_iCuadrada.jpg'
    },
    {
      name: 'Algo Inutil',
      img: 'https://www.cultura.gob.ar/media/uploads/algo_inutil_redes_2023_cuadrada.png'
    },
    {
      name: 'Algo Inutil',
      img: 'https://www.cultura.gob.ar/media/uploads/algo_inutil_redes_2023_cuadrada.png'
    },
    {
      name: 'Algo Inutil',
      img: 'https://www.cultura.gob.ar/media/uploads/algo_inutil_redes_2023_cuadrada.png'
    },
    {
      name: 'Algo Inutil',
      img: 'https://www.cultura.gob.ar/media/uploads/algo_inutil_redes_2023_cuadrada.png'
    }*/


  constructor(private eventService:EventsService) {  }

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
