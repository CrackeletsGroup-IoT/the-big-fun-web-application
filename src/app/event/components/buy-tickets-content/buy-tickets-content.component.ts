import { Component } from '@angular/core';

@Component({
  selector: 'app-buy-tickets-content',
  templateUrl: './buy-tickets-content.component.html',
  styleUrls: ['./buy-tickets-content.component.css']
})
export class BuyTicketsContentComponent {
  eventImg= "https://www.anayainfantilyjuvenil.com/images/libros/grande/9788469833728-la-vida-es-sueno-clasicos-hispanicos.jpg"
  dataSource=[
    {date: "25/04/2023",hour:"8:00", nameEvent:"Obra teatral 'La vida es un sueño'", cost: "25", capacity:"200", availability: "83"}
  ]
  availability= "83"

}
