import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/core/data/share-data.service';

@Component({
  selector: 'app-cancelledprojects',
  templateUrl: './cancelledprojects.component.html',
  styleUrls: ['./cancelledprojects.component.scss']
})
export class CancelledprojectsComponent implements OnInit {
  freecompleted: any = [];
  constructor( public router: Router, private dataservice: ShareDataService) {
    this.dataservice.ManageUsers5.subscribe((data: any) => {
      this.freecompleted = data
    })
   }
  ngOnInit(): void {
  }

}