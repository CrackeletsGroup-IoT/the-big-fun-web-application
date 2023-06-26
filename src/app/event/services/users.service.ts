import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {User} from "../model/user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService<User>{

  constructor(http:HttpClient) {
    super(http);
    this.basePath='http://localhost:8080/api/v1/organizers';
  }

}
