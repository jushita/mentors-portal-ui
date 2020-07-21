import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MenteeService } from 'src/app/core/services/mentee.service';
import { Mentee } from 'src/app/models/mentee';


@Component({
  selector: 'main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {
  public mentees: Mentee[];
  constructor(private router: Router, private menteeService: MenteeService) { 
  }

  ngOnInit() {
    this.menteeService.getAllMentee().subscribe((data) => {
      this.mentees = data;
    });
  }
  
  
  navigate(mentee: Mentee) {
    let navigationExtra: NavigationExtras = {
      queryParams: mentee
    }
    let name = mentee.name
    let url = `/mentee-dashboard/${name}`
    this.router.navigate([url], navigationExtra)
  }

}
