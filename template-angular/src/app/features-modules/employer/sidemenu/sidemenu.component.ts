import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/core/data/share-data.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  base: string="";
  page: string="";
  last: string = '';
  setactive:boolean =false;
  sidemenu: Array<any> = [];
  currentroute : string ='';
  constructor(private data :ShareDataService,private Router: Router) {
    // this.sidemenu = this.data.sidemenu;
    Router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.getRoutes(event);
      }
    });
    this.data.getSidemenu.subscribe((res: any) => {
      this.sidemenu = res;
    });
    this.getRoutes(this.Router);

  }

  ngOnInit(): void {
    // console.log(this.sidemenu)
  }
  getRoutes(event:any){
    this.currentroute = event.url;
    let splitVal = event.url.split('/');
        this.base = splitVal[1];
        this.page = splitVal[2];
        this.last = splitVal[3];
   
  }
  setActive(menu:any){
    sessionStorage.setItem('title' , menu)
    this.sidemenu.map((title: any) => {
     
      let active = sessionStorage.getItem('title');
      if(active == title.page){
        this.setactive = true;
      }else{
        this.setactive = false;

      }

  });
  }
}
