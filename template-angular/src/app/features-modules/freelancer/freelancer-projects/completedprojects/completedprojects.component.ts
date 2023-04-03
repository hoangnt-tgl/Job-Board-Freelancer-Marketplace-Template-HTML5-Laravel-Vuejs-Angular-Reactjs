import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/core/data/share-data.service';

@Component({
  selector: 'app-completedprojects',
  templateUrl: './completedprojects.component.html',
  styleUrls: ['./completedprojects.component.scss']
})
export class CompletedprojectsComponent implements OnInit {
  freecompleted: any = [];
  constructor( public router: Router, private dataservice: ShareDataService) {
    this.dataservice.ManageUsers5.subscribe((data: any) => {
      this.freecompleted = data
    })
   }
  ngOnInit(): void {
  }

}