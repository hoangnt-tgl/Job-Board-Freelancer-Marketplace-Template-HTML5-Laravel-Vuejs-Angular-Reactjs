import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/core/data/share-data.service';

@Component({
  selector: 'app-ongoingprojects',
  templateUrl: './ongoingprojects.component.html',
  styleUrls: ['./ongoingprojects.component.scss']
})
export class OngoingprojectsComponent implements OnInit {
  freelist: any = [];
  constructor( public router: Router, private dataservice: ShareDataService) {
    this.dataservice.ManageUsers4.subscribe((data: any) => {
      this.freelist = data
    })
   }
  ngOnInit(): void {
  }

}