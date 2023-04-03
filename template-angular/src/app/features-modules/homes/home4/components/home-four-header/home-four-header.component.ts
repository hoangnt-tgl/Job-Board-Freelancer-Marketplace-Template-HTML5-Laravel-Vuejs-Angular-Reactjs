import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-home-four-header',
  templateUrl: './home-four-header.component.html',
  styleUrls: ['./home-four-header.component.scss']
})
export class HomeFourHeaderComponent implements OnInit {
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
  ngOnInit(): void {}
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