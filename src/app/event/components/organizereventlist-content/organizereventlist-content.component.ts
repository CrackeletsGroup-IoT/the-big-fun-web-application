import { Component } from '@angular/core';

//valores de las filas
export interface PeriodicElement {
  title: string;
  position: number;
  hour: string;
  day: string;
  month: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, title: 'Hermanas de pascal dammert', hour: '8:00 pm', day: '20', month: 'May'},
  {position: 2, title: 'Despertar de primavera', hour: '7:00 pm', day: '1', month: 'Jun'},
  {position: 3, title: 'Obra Romeo y Julieta', hour: '8:00 pm', day: '10', month: 'Jun'},
  {position: 4, title: 'Hermanas de pascal dammert', hour: '8:00 pm', day: '20', month: 'May'},
  {position: 5, title: 'Hermanas de pascal dammert', hour: '8:00 pm', day: '20', month: 'May'},
  {position: 6, title: 'Hermanas de pascal dammert', hour: '8:00 pm', day: '20', month: 'May'},
  {position: 7, title: 'Hermanas de pascal dammert', hour: '8:00 pm', day: '20', month: 'May'},

];

@Component({
  selector: 'app-organizereventlist-content',
  templateUrl: './organizereventlist-content.component.html',
  styleUrls: ['./organizereventlist-content.component.css']
})

export class OrganizereventlistContentComponent {

  displayedColumns: string[] = ['position', 'title', 'hour', 'day','month'];
  dataSource = ELEMENT_DATA;

}
