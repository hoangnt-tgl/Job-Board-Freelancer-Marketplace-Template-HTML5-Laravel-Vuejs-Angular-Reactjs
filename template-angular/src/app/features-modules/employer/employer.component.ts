import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})
export class EmployerComponent implements OnInit {
  empolyee: boolean = true;
  breadcrum:boolean =true;
  base: string="";
  page: string="";
  last: string ="";
  url: any;
  constructor(private Router: Router,location: Location) {
    Router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.getRoutes(event);
      }
    });
    this.getRoutes(this.Router);
    this.url = location.path();
   }

  ngOnInit(): void {
  }
  getRoutes(event:any){
    let splitVal = event.url.split('/');
        this.base = splitVal[1];
        this.page = splitVal[2];
        this.last = splitVal[3];
        if (
          event.url === '/employer/company-profile' ||
          event.url === '/employer/company-details' ||
          event.url === '/employer/company-project' ||
          event.url === '/employer/company-gallery' ||
          event.url === '/employer/company-reviews' || 
          event.url === '/employer/chats' ||
          event.url === '/employer/post-project' ||
          event.url === '/employer/developer'
          

        ) {
          this.empolyee = false;
          this.breadcrum = false;
        } else {
          this.empolyee = true;
          this.breadcrum = true;
        }
        // if(
        //   event.url === '/employer/chats'
        // ){
        //   this.breadcrum = false;
        // }else{
        //   this.breadcrum = true;
        // }
  }
}
