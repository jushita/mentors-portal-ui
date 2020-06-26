import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {
  students: string[] = ['1', '2', '3', '4', '5'];

  constructor(private router: Router) { 
  }


  ngOnInit(): void {
  }


  navigate(s: string) {
    console.log(s);
    let url = `/mentee-dashboard/${s}`
    this.router.navigateByUrl(url)
  }

}
