import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Form } from 'src/app/models/form';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Mentee } from 'src/app/models/mentee';
import { MessageService } from 'src/app/core/services/message.service';
import { Message } from 'src/app/models/message';

export interface IDialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}


@Component({
  selector: 'mentee-dashboard',
  templateUrl: './mentee-dashboard.component.html',
  styleUrls: ['./mentee-dashboard.component.css']
})

export class MenteeDashboardComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'type', 'message'];
  public formDialogData: Form = new Form('', '', '');
  public mentee: Mentee;
  public messages: Message[];
  public dataSource; 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(public dialog: MatDialog, public activatedRoute: ActivatedRoute, public messageService: MessageService) {
    this.mentee = new Mentee(0, '', '', new Date(), new Date());
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogData, {
      width: '250px',
      data: 'DefaultUserName'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.formDialogData = result;
    });
  }
  
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((res: Mentee) => {
      this.mentee = res;
    });
    console.log(this.mentee.id)
    this.messageService.getAllMenteeMessage(this.mentee.id).subscribe((data: Message[]) => {
      this.messages = data;
    });
    this.dataSource = new MatTableDataSource();
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
  public menteeDashboardComponenet: MenteeDashboardComponent;
  
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