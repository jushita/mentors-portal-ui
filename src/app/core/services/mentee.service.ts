import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Mentee } from 'src/app/models/mentee';

@Injectable({
  providedIn: 'root'
})
export class MenteeService {

  constructor(private api: ApiService) { }

  public getAllMentee(): Observable<Mentee[]> {
    return this.api.getAllMentee();
  }
}
