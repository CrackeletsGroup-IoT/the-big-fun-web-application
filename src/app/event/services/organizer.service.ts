import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Organizer} from "../model/organizer";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrganizerService extends BaseService<Organizer>{

  constructor(http:HttpClient) {

    super(http);
    this.basePath='https://the-big-fun.zeabur.app/api/v1/organizers';
  }


  findOrganizerByName(organizerName: any): Observable<any> {
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
