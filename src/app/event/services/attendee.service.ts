import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Attendee} from "../model/attendee";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, retry, tap, throwError} from "rxjs";
import {UserSignUp} from "../model/userSignUp";

@Injectable({
  providedIn: 'root'
})
export class AttendeeService extends BaseService<Attendee>{

  constructor(http:HttpClient) {
    super(http);
    this.basePath='https://the-big-fun-app.zeabur.app/api/v1/attendees';
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

}
