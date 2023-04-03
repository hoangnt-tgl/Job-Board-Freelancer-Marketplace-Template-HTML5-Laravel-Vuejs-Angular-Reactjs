import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = [
    {
      path : 'assets/img/project-1.jpg',
      port: 'Razor Website Design'
    },
    {
      path : 'assets/img/project-2.jpg',
      port: 'Transport Website'
    },
    {
      path : 'assets/img/project-3.jpg',
      port: 'Wordpress Website'
    },
    {
      path : 'assets/img/project-4.jpg',
      port: 'Mobile App'
    },
    {
      path : 'assets/img/project-5.jpg',
      port: 'Healthcare Website'
    },
    {
      path : 'assets/img/project-6.jpg',
      port: 'Injury Website'
    },
    {
      path : 'assets/img/project-7.jpg',
      port: 'Website Design'
    },
  ]

}
