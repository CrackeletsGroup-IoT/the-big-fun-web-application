import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

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

  //metodo para subir el qr y obtener el link del qr
  uploadQR(file:any, paymentId:number){

    const url= this.basePath + '/'+ paymentId + '/upload';
    const formData= new FormData();
    formData.append('file', file);

    this.http.post(url, formData).subscribe(
      (response)=>{
        console.log("qr uploaded");
      },
      (error)=>{console.log(error)}
    );
  }

  createPayment(payment: any, eventAttendeeId:any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.basePath+'/'+eventAttendeeId, payment, { headers });
  }


}
