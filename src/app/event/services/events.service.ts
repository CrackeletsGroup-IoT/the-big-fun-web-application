import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Event} from "../model/event";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventsService extends BaseService<Event>{

  constructor(http:HttpClient) {
    super(http);
    this.basePath='http://localhost:8080/api/v1/events';
  }

  findAttendeeByName(attendeeName: String): Observable<any> {

    const url = this.basePath+'/byname/'+attendeeName;

    return this.http.get(url).pipe(
      tap(response => {
        console.log('show attendee', response);
      }),
      catchError(error => {
        console.error('error to get attendee', error);
        return throwError('Error');
      })
    );
  }

  findOrganizerByName(organizerName: String): Observable<any> {
    const url = this.basePath+'/byname/'+organizerName;

    return this.http.get(url).pipe(
      tap(response => {
        console.log('show organizer', response);
      }),
      catchError(error => {
        console.error('error to get organizer', error);
        return throwError('Error');
      })
    );
  }


}
