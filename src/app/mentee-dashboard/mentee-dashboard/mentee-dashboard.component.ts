import { Component, OnInit, Inject } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Form } from 'src/app/models/form';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface IDialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

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

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogData, {
      data: {
        animal: 'panda'
      }
    });
  }

  ngOnInit(): void {
  }

  

}


@Component({
  selector: 'dialog-data',
  templateUrl: 'dialog-data.html',
})
export class DialogData {
  constructor(@Inject(MAT_DIALOG_DATA) public data: IDialogData) {
  }
}