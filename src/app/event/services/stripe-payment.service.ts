import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StripePaymentService {

  private baseUrl='https://the-big-fun-api-g6fnhyethbazcvc2.brazilsouth-01.azurewebsites.net/api/v1/stripe-payment';
  //private baseUrl='http://localhost:8080/api/v1/stripe-payment';

  constructor(private http:HttpClient) {
  }

  createCardToken(cardDetails: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/card/token`, cardDetails);
  }

  charge(chargeDetails: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/charge`, chargeDetails);
  }

}
