import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Event} from "../model/event";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, tap, throwError} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class EventsService extends BaseService<Event>{

  constructor(http:HttpClient,private router:Router) {
    super(http);
    this.basePath='https://the-big-fun-api-g6fnhyethbazcvc2.brazilsouth-01.azurewebsites.net/api/v1/events';
    //this.basePath='http://localhost:8080/api/v1/events';
  }

  findAttendeeByName(attendeeName: String): Observable<any> {

    const url = 'https://the-big-fun-api-g6fnhyethbazcvc2.brazilsouth-01.azurewebsites.net/api/v1/attendees/byname/'+attendeeName;
    //const url = 'http://localhost:8080/api/v1/attendees/byname/'+attendeeName;

    return this.http.get(url, this.httpOptions).pipe(
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

  //metodo para subir la imagen a la base de datos
  uploadFile(file:any, eventId:number){

    const url= this.basePath + '/'+eventId + '/upload';
    const formData= new FormData();
    formData.append('file', file);

    this.http.post(url, formData).subscribe(
      (response)=>{
        console.log("imagen guardada correctamente");

      },
      (error)=>{console.log(error)}
    );
  }

  createEvent(item: any, organizerId:any): Observable<any> {

    const url=this.basePath + "/" + organizerId;

    return this.http.post<any>(url, JSON.stringify(item),
      this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  findEventsByOrganizerId(organizerId: any): Observable<any> {
    const url = this.basePath+'/organizer/'+organizerId;

    return this.http.get(url).pipe(
      tap(response => {
        //console.log('show events by organizer', response);
      }),
      catchError(error => {
        console.error('error to get events by organizer', error);
        return throwError('Error');
      })
    );
  }

}
