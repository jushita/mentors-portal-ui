import { Component, OnInit, Inject } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Form } from 'src/app/models/form';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { getLocaleDateFormat } from '@angular/common';
import { ApiService } from 'src/app/core/services/api.service';
import { MenteeService } from 'src/app/core/services/mentee.service';

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
  public formDialogData: Form = new Form('', '', '');

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public dialog: MatDialog, private menteeService: MenteeService) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogData, {
      width: '250px',
      data: 'DefaultUserName'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.formDialogData = result;
      console.log('The dialog was closed');
    });
  }

  getData() {
    let data = this.menteeService.getAllMentee().subscribe();
    console.log(data)
  }
  

  ngOnInit(): void {
  }

}

@Component({
  selector: 'dialog-data',
  templateUrl: 'dialog-data.html',
})
export class DialogData {
  public mentorName: string;
  public date: string;
  public message: string;
  public newForm: Form = new Form('','','');


  constructor(
    public dialogRef: MatDialogRef<DialogData>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onSubmitClick(mentorName: string, date: string, message: string): void {
    this.newForm = new Form(mentorName, date, message);
    this.dialogRef.close(this.newForm);
  }

  getData() {
    return this.newForm;
  }
}