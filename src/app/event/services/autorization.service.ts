import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {UserSignIn} from "../model/userSignIn";
import {UserSignUp} from "../model/userSignUp";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AutorizationService extends BaseService<UserSignIn> {

  constructor(http:HttpClient) {
    super(http);
    this.basePath='https://the-big-fun-app.zeabur.app/api/v1/userss/auth/';
  }

  signUp(item:any): Observable<UserSignUp>{
    return this.http.post<UserSignUp>(this.basePath+'sign-up',JSON.stringify(item), this.httpOptions)
      .pipe(retry(2),catchError(this.handleError));
  }

  signIn(item:UserSignIn): Observable<any>{
    return this.http.post<UserSignIn>(this.basePath+'sign-in',JSON.stringify(item), this.httpOptions)
      .pipe(retry(2),catchError(this.handleError));
  }

}
