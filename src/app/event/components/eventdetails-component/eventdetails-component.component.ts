import { Component } from '@angular/core';

@Component({
  selector: 'app-eventdetails-component',
  templateUrl: './eventdetails-component.component.html',
  styleUrls: ['./eventdetails-component.component.css']
})
export class EventdetailsComponentComponent {
  nameEvent= "Chatarrita"
  img= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqx5gurXNgoiEx8PNnw-AJm7bJz3F1-TLpgA&usqp=CAU"
  date= "12/10/2023"
  hour= "8pm"
  cost= "20$"
  capacity= "200"
  location= "Av. las fresias 158 la molina"
}
