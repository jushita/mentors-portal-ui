import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  listOfSideBarItems: string[] = ['Home', 'To-Do', 'Notes']

  constructor() { }

  ngOnInit(): void {
  }

}
