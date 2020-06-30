import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Form } from 'src/app/models/form';

const FORM_DATA: Form[] = [
  {
    mentorName: 'mentor1',
    date: '01/01/2020',
    message: 'message goes here'
  },
  {
    mentorName: 'mentor2',
    date: '01/01/2020',
    message: 'message2 goes here'
  }
];

@Component({
  selector: 'mentee-dashboard',
  templateUrl: './mentee-dashboard.component.html',
  styleUrls: ['./mentee-dashboard.component.css']
})


export class MenteeDashboardComponent implements OnInit {
  displayedColumns: string[] = ['name', 'notes'];
  dataSource = new MatTableDataSource(FORM_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit(): void {
  }

  

}

