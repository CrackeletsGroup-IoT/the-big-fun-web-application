import { Component } from '@angular/core';

@Component({
  selector: 'app-view-events-content',
  templateUrl: './view-events-content.component.html',
  styleUrls: ['./view-events-content.component.css']
})
export class ViewEventsContentComponent {
  events = [
    {
      date: '2023-05-15',
      hour: '19:00',
      name: 'Concierto de rock',
      cost: '50.00',
      aforo: 100
    },
    {
      date: '2023-05-20',
      hour: '20:30',
      name: 'Obra de teatro',
      cost: '30.00',
      aforo: 80
    },
    {
      date: '2023-06-01',
      hour: '18:00',
      name: 'Festival de cine',
      cost: '20.00',
      aforo: 150
    },
    {
      date: '2023-06-15',
      hour: '21:00',
      name: 'Concierto de jazz',
      cost: '40.00',
      aforo: 120
    },
    {
      date: '2023-06-15',
      hour: '21:00',
      name: 'Concierto de jazz',
      cost: '40.00',
      aforo: 120
    },
    {
      date: '2023-06-15',
      hour: '21:00',
      name: 'Concierto de jazz',
      cost: '40.00',
      aforo: 120
    }

  ];


}
