import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventAtendeeService {

  private basePath='https://the-big-fun-api-g6fnhyethbazcvc2.brazilsouth-01.azurewebsites.net/api/v1/event-attendees';
  //private basePath='http://localhost:8080/api/v1/event-attendees';

  constructor(private http:HttpClient) {
  }

  createEventAttendee(eventId:any, attendeeId:any) {
    return this.http.post<any>(`${this.basePath}/event-${eventId}/attendee-${attendeeId}`,{});
  }

  //obtener eventos comprados del atendee
  getEventsBuyAttendee(attendeesId: number): Observable<any> {
    const url = this.basePath+'/attendees/'+attendeesId;

    return this.http.get(url).pipe(
      tap(response => {
        console.log('show events buy attendee', response);
      }),
      catchError(error => {
        console.error('error to get events', error);
        return throwError('Error');
      })
    );
  }

  //obtener atendee que compraron un evento
  getAtendeesBuyer(eventId: number): Observable<any> {
    const url = this.basePath+'/events/'+eventId;

    return this.http.get(url).pipe(
      tap(response => {
        console.log('show attendees', response);
      }),
      catchError(error => {
        console.error('error to get attendees', error);
        return throwError('Error');
      })
    );
  }

}
