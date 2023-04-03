import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/core/data/share-data.service';

@Component({
  selector: 'app-cancelled-projects',
  templateUrl: './cancelled-projects.component.html',
  styleUrls: ['./cancelled-projects.component.scss']
})
export class CancelledProjectsComponent implements OnInit {
  empprojects: any = [];
  constructor( public router: Router, private dataservice: ShareDataService) {
    this.dataservice.ManageUsers.subscribe((data: any) => {
      this.empprojects = data
    })
   }
  ngOnInit(): void {
  }

}