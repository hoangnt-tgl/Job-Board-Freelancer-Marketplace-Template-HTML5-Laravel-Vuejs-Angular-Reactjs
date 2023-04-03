import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/core/data/share-data.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  freeprojects: any = [];
  constructor( public router: Router, private dataservice: ShareDataService) {
    this.dataservice.ManageUsers3.subscribe((data: any) => {
      this.freeprojects = data
    })
   }

  ngOnInit(): void {
  }

}
