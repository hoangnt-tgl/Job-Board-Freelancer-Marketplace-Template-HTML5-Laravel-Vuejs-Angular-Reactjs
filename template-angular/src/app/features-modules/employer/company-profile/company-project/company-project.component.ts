import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/core/data/share-data.service';


@Component({
  selector: 'app-company-project',
  templateUrl: './company-project.component.html',
  styleUrls: ['./company-project.component.scss']
})
export class CompanyProjectComponent implements OnInit {
  empprojects: any = [];
  constructor( public router: Router, private dataservice: ShareDataService) {
    this.dataservice.ManageUsers.subscribe((data: any) => {
      this.empprojects = data
    })
   }
  ngOnInit(): void {
  }

}