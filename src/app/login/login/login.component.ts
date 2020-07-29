import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public welcomeMessage;
  public notAuthorized: string;
  constructor(private http: HttpClient, private router: Router, private api: ApiService) { 
  }

  ngOnInit(): void {
  }
  login(name: string, password: string) {
    this.api.login(name, password)
    .subscribe({
        next: (res: any) => {
          if(res) {
            localStorage.setItem('token', res.token as string);
          }
        },
        error: (err) => {
          console.log(err);
          this.notAuthorized = "You're not authorized"
        }
      });
      
  }
}
