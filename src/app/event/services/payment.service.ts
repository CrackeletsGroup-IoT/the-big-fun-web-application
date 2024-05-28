import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  //private accessToken='IeXyHLfK1rXAfq_-KxEzU72-NRmzWagcvH3DaGK_My1xa5BOPxR--8a9j1OuFkbZ';
  //private  baseUrl=`https://api.qr-code-generator.com/v1/create?access-token=${this.accessToken}`;
  private basePath='https://the-big-fun.zeabur.app/api/v1/payments';

  constructor(private http:HttpClient) {
  }

  createQr(uuid: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = { headers: headers, responseType: 'blob' as 'json' };
    return this.http.get(`${this.basePath}/generateQR?uuid=${uuid}`,options);
  }



}
