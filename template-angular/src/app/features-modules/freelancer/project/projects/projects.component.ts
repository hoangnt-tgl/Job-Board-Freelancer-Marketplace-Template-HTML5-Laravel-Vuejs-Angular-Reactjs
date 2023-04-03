import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/core/data/share-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public isButtonVisible = true;
  public isButtonsVisible = true;
  public isButtonVisibles = true;
  public isButtonVisibl = true;
  public isButtonsVisibles = true;


  freeprojects: any = [];
  constructor( public router: Router, private dataservice: ShareDataService) {
    this.dataservice.ManageUsers3.subscribe((data: any) => {
      this.freeprojects = data
    })
   }
  ngOnInit(): void {
    
  }



}