import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-home-two-header',
  templateUrl: './home-two-header.component.html',
  styleUrls: ['./home-two-header.component.scss']
})
export class HomeTwoHeaderComponent implements OnInit {
  menuElement!: ElementRef;

  sticky: boolean = false;
  elementPosition: any;
  base: string=""
  page: string="";
  constructor(private Router: Router) {
    this.Router.events.subscribe((data: any) => {
      if (data instanceof NavigationStart) {
        this.base = data.url.split('/')[1];
      }
    });
  }
  ngOnInit() {
    

    window.addEventListener("resize", function (event) {
      // if (window.innerWidth > 991) {
      //     (document.getElementById('windows')as HTMLDivElement).classList.remove('menu-opened');
      //     (document.getElementById('sidebar')as HTMLDivElement).classList.remove('opened');
      //     let x=document.querySelectorAll<HTMLElement>('.submenu') ;
      //     x.forEach((element) => {
      //       element.style.display="block";
      //     });        
      // }else {
      //   let x=document.querySelectorAll<HTMLElement>('.submenu') ;
      //     x.forEach((element) => {
      //       element.style.display="none";

      //     });
      // }
  })

  }
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll == 0) {
      this.sticky = false;
    } else {
      this.sticky = true;
    }
  }
}