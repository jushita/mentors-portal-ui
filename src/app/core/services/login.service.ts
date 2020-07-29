import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private api: ApiService) { }

  public login(user: string, password: string) {
    return this.api.login(user, password);
  }
}
