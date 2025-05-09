import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, tap, throwError} from "rxjs";

export class BaseService <T> {

  //basePath='https://the-big-fun.zeabur.app/api/v1'
  basePath='http://localhost:8080/api/v1'

  httpOptions={
    headers:new HttpHeaders({'Content-type': 'application/json',})
  }

  constructor(protected http:HttpClient) { }

  handleError(error:HttpErrorResponse){
    // Default error handling
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred ${error.error.message}`);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.error(`Backend returned code ${error.status}, body was ${error.error}`);
    }
    return throwError(() =>
      new Error('Something happened with request, please try again later'));
  }

  // Create Resource
  create(item: any): Observable<T> {
    return this.http.post<T>(this.basePath, JSON.stringify(item),
      this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Delete Resource
  delete(id: any) {
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Update Resource
  update(id: any, item: any): Observable<T> {
    return this.http.put<T>(`${this.basePath}/${id}`,
      JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getAll(): Observable<T> {
    return this.http.get<T>(`${this.basePath}`,
      this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getById(id: any): Observable<T>{

    return this.http.get<T>(this.basePath+'/'+id, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }







                                           //EVENT!!!!

  addAttendeeToEvent(eventId: number, attendeeId: number): Observable<any> {
    const url = `http://localhost:8080/api/v1/eventsto/${eventId}/attendee/${attendeeId}`;

    return this.http.post(url, {}).pipe(
      tap(response => {
        // Manejar la respuesta exitosa
        console.log('Attendee añadido correctamente', response);
      }),
      catchError(error => {
        // Manejar el error
        console.error('Error al añadir el attendee', error);
        return throwError('Error al añadir el attendee');
      })
    );
  }
  addEventToOrganizer(organizerId: number, eventId: number): Observable<any> {
    const url = `http://localhost:8080/api/v1/organizersto/${organizerId}/events/${eventId}`;

    return this.http.post(url, {}).pipe(
      tap(response => {
        // Manejar la respuesta exitosa
        console.log('Attendee añadido correctamente', response);
      }),
      catchError(error => {
        // Manejar el error
        console.error('Error al añadir el attendee', error);
        return throwError('Error al añadir el attendee');
      })
    );
  }
  addPayamentToEvent(paymentId: number, eventId: number): Observable<any> {
    const url = `http://localhost:8080/api/v1/eventsp/${eventId}/payments/${paymentId}`;

    return this.http.post(url, {}).pipe(
      tap(response => {
        console.log('payment añadido correctamente', response);
      }),
      catchError(error => {
        console.error('Error al añadir el attendee', error);
        return throwError('Error adding payment');
      })
    );
  }
  getEventsInOrganizers(organizerId: number): Observable<any> {
    const url = `http://localhost:8080/api/v1/organizersto/${organizerId}/events`;

    return this.http.get(url).pipe(
      tap(response => {
        console.log('show events', response);
      }),
      catchError(error => {
        console.error('error to get events', error);
        return throwError('Error');
      })
    );
  }
  getEventsInAttendee(attendeeId: number): Observable<any> {
    const url = `http://localhost:8080/api/v1/eventsto/attendees/${attendeeId}`;

    return this.http.get(url).pipe(
      tap(response => {
        console.log('show events with ids', response);
      }),
      catchError(error => {
        console.error('error to get events', error);
        return throwError('Error');
      })
    );
  }


}
