import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/core/data/share-data.service';

@Component({
  selector: 'app-markedfavourites',
  templateUrl: './markedfavourites.component.html',
  styleUrls: ['./markedfavourites.component.scss']
})
export class MarkedfavouritesComponent implements OnInit {
  freelancer: any = [];
  constructor( public router: Router, private dataservice: ShareDataService) {
    this.dataservice.ManageUsers1.subscribe((data: any) => {
      this.freelancer = data
    })
   }
  ngOnInit(): void {
  }

}