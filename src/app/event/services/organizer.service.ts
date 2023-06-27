import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Organizer} from "../model/organizer";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrganizerService extends BaseService<Organizer>{

  constructor(http:HttpClient) {

    super(http);
    this.basePath='http://localhost:8080/api/v1/organizers';
  }

}
