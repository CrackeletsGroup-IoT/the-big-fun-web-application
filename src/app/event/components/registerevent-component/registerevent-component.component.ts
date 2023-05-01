import { Component } from '@angular/core';

@Component({
  selector: 'app-registerevent-component',
  templateUrl: './registerevent-component.component.html',
  styleUrls: ['./registerevent-component.component.css']
})
export class RegistereventComponentComponent {
  eventImg= "https://www.anayainfantilyjuvenil.com/images/libros/grande/9788469833728-la-vida-es-sueno-clasicos-hispanicos.jpg"
  nameEvent=null
  addressEvent=null
  descriptionEvent=null
  dateEvent=null
  timeEvent=null
  description=null
  selectedTickets=null
  typeTickets=[
    {name:'Estándar', code: 'est'},
    {name:'VIP', code: 'vip'}
  ]
  maxCapacity= null
}
