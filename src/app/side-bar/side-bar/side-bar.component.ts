import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  listOfSideBarItems: string[] = ['Home', 'To-Do', 'Notes']

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
    this.router.navigateByUrl('/message')
  }

}
