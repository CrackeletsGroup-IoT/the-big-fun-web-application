import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, tap, throwError} from "rxjs";

export class BaseService <T> {

  basePath='http://localhost:8080/api/v1'

  httpOptions={
    headers:new HttpHeaders({'Content-type': 'application/json',})
  }

  constructor(private http:HttpClient) { }

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
  getAttendeeById(attendeeId: number): Observable<any>{
    const url = `http://localhost:8080/api/v1/attendees/${attendeeId}`;

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

  addUser(item: any) {
    return this.http.post<T>('http://localhost:8080/api/v1/userss/auth/sign-up', JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  authenticateUser(item: any): Observable<any>{
    return this.http.post<T>('http://localhost:8080/api/v1/userss/auth/sign-in', JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));

  }
  createOrganizer(item:any): Observable<any> {
    return this.http.post<T>('http://localhost:8080/api/v1/organizers', JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  createAttendee(item:any): Observable<any>{
    return this.http.post<T>('http://localhost:8080/api/v1/attendees', JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  findAttendeeByName(attendeeName: String): Observable<any> {
    const url = `http://localhost:8080/api/v1/attendees/byname/${attendeeName}`;

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
    const url = `http://localhost:8080/api/v1/organizers/byname/${organizerName}`;

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
