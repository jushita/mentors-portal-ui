import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(public api: ApiService) { }

  public getAllMenteeMessage(id: number) {
    return this.api.getAllMenteeMessage(id.toString());
  }


}
