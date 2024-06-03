import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EventAtendeeService {

  private basePath='https://the-big-fun.zeabur.app/api/v1/event-attendees';

  constructor(private http:HttpClient) {
  }

  createEventAttendee(eventId:any, attendeeId:any) {
    return this.http.post<any>(`${this.basePath}/event-${eventId}/attendee-${attendeeId}`,{});
  }

}
