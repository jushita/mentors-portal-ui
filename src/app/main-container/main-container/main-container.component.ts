import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {
  students: string[] = ['Student 1', 'Student 2', 'Student 3', 'Student 4', 'Student 5'];


  constructor() { }

  ngOnInit(): void {
  }

}
