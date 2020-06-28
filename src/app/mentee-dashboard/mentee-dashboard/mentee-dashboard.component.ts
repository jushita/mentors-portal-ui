import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mentee-dashboard',
  templateUrl: './mentee-dashboard.component.html',
  styleUrls: ['./mentee-dashboard.component.css']
})
export class MenteeDashboardComponent implements OnInit {
  public notes: {}[] = [
    {
      'mentorName': 'mentor1',
      'date': '01/01/2020',
      'message': 'message goes here'
    },
    {
      'mentorName': 'mentor2',
      'date': '01/01/2020',
      'message': 'message2 goes here'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  

}
