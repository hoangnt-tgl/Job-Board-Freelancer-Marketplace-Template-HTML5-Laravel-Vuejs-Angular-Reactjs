import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  toggleClass(slide:any){
    slide.favourite = !slide.favourite;
  }
  customOptions: OwlOptions = {
    loop: true,
    margin: 30,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fas fa-chevron-left"></i>',
    '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  aboutusslides = [
      {
        id: 1,
        img: "assets/img/review/review-01.jpg",
        name: "Davis Payerf",
        officer: "CEO",
        rating: "4.7",
        para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean."
      },
      {
        id: 2,
        img: "assets/img/review/review-02.jpg",
        name: "Davis Payerf",
        officer: "Team Lead",
        rating: "4.7",
        para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean."
      },
      {
        id: 3,
        img: "assets/img/review/review-03.jpg",
        name: "Davis Payerf",
        officer: "CEO",
        rating: "4.7",
        para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean."
      },
      {
        id: 4,
        img: "assets/img/review/review-02.jpg",
        name: "Davis Payerf",
        officer: "CEO",
        rating: "4.7",
        para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean."
      }
  ]

}
