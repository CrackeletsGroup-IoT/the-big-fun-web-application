import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-buy-tickets-content',
  templateUrl: './buy-tickets-content.component.html',
  styleUrls: ['./buy-tickets-content.component.css']
})
export class BuyTicketsContentComponent implements OnInit{


  constructor(private route:ActivatedRoute) {
  }

  eventId:any;
  attendeeId:any;

  eventImg= "https://www.anayainfantilyjuvenil.com/images/libros/grande/9788469833728-la-vida-es-sueno-clasicos-hispanicos.jpg"
  dataSource=[
    {date: "25/04/2023",hour:"8:00", nameEvent:"Obra teatral 'La vida es un sueño'", cost: "25", capacity:"200", availability: "83"}
  ]
  availability= "83"

  ngOnInit(): void {

    this.route.queryParams.subscribe(params=>{

      this.eventId=params['eventId'];
      this.attendeeId=params['attendeeId'];

    })

  }

}
