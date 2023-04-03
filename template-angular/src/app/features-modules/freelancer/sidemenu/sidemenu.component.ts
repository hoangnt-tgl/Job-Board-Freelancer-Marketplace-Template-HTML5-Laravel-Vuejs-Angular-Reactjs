import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/core/data/share-data.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { CommonService } from 'src/app/core/services/common/common.service';
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  base: string="";
  page: string="";
  last: string = '';
  currentroute : string ='';
  sidebar: Array<any> = [];
  constructor(private data :ShareDataService,private Router: Router,private common : CommonService) { 
    this.common.base.subscribe((res:string)=>{
      this.base =res;
    })
    this.common.page.subscribe((res:string)=>{
      this.page =res;
    })
    this.common.last.subscribe((res:string)=>{
      this.last =res;
    })

  this.sidebar = this.data.freelancer_sidemenu;
  }

  ngOnInit(): void {
  }

}
