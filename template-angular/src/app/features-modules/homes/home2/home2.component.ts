import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as AOS from 'aos';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {
  selected = 'freelancers';
  getLink = "project"
  constructor(private router: Router) { }

  ngOnInit(): void {
    AOS.init({
      duration: 1200,
		  once: true,
    });
  }
  toggleClass(slide:any){
    slide.favourite = !slide.favourite;
  }
  customsOptions: OwlOptions = {
    loop: true,
    margin: 30,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      768 : {
        items: 1
      },
      991 : {
        items: 1
      },
      1170: {
        items: 1
      }
  },
    nav: true
  }

  reviewsslides = [
    {
      profileimg: 'assets/img/review/review-01.jpg',
      name: 'Hannah Schmitt',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse',
      date: 'May 8, 2020'
    },
    {
      profileimg: 'assets/img/review/review-02.jpg',
      name: 'Davis Payerf',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse',
      date: 'Apr 8, 2021'
    },
    {
      profileimg: 'assets/img/review/review-01.jpg',
      name: 'Hannah Schmitt',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse',
      date: 'May 8, 2020'
    },
    {
      profileimg: 'assets/img/review/review-03.jpg',
      name: 'Hannah Schmitt',
      para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse',
      date: 'May 8, 2020'
    },
  ]
  search(){
    if(this.selected === 'projects'){
      this.router.navigateByUrl('/freelancer/project')
    }else if(this.selected === 'freelancers'){
      this.router.navigateByUrl('/employer/developer')
    }
  }
}
