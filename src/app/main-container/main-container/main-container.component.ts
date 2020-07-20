import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenteeService } from 'src/app/core/services/mentee.service';
import { Mentee } from 'src/app/models/mentee';


@Component({
  selector: 'main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {
  students: Mentee[];
  public menteeList;
  constructor(private router: Router, private menteeService: MenteeService) { 
  }

  ngOnInit() {
    this.menteeService.getAllMentee().subscribe((data) => {
      this.students = data;
    }
    )
  }
  
  
  navigate(s: string) {
    console.log(s);
    let url = `/mentee-dashboard/${s}`
    this.router.navigateByUrl(url)
  }

}
