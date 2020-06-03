import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  homeRouting() {
    this.router.navigate[''];
  }

  toDoRouting() {
    console.log(`here`)
    this.router.navigate['']
  }

  messagesRouting() {
    console.log('inside message')
    this.router.navigateByUrl('/message')
  }

}
