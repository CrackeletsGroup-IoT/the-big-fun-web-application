import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Event} from "../model/event";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EventsService extends BaseService<Event>{

  constructor(http:HttpClient) {
    super(http);
    this.basePath='http://localhost:8080/api/v1/events';
  }


}
