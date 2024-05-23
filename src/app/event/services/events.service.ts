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
    this.basePath='https://the-big-fun.zeabur.app/api/v1/events';
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

  //metodo para subir la imagen a la base de datos
  uploadFile(file:any, eventId:number){

    const url= this.basePath + '/'+eventId + '/upload';
    const formData= new FormData();

    console.log("File: ", file)

    formData.append('file', file);

    console.log("FormData: ",formData);

    this.http.post(url, formData).subscribe(
      (response)=>{
        console.log("imagen guardada correctamente");
      },

      (error)=>{console.log(error)}

    );
  }

}
