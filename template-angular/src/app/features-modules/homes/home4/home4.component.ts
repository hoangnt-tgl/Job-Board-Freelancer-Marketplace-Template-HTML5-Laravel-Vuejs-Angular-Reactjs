import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home4',
  templateUrl: './home4.component.html',
  styleUrls: ['./home4.component.scss']
})
export class Home4Component implements OnInit {
  selected = 'freelancers';
  getLink = "project"
  slideConfig={
    slidesToShow: 1,
    SlidesToScroll: 1,
    asNavFor:'.client-img',
    dots: false,
    nav: true
  }
  slideConfig2={
    slidesToShow: 4,
    SlidesToScroll: 1,
    asNavFor:'.say-about',
    dots: false,
    nav: true,
    centerMode:true,
    infinite: true,
    focusOnSelect: true
  }
  customOption: OwlOptions = {
    loop: true,
    margin: 30,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>'
    ],
    responsive: {
      0: {
        items: 1
      },
      768 : {
        items: 1
      },
      1170: {
        items: 1
      }
  },
    nav: true
  }
  images = [
    {
      img: 'assets/img/quote-01.svg',
      img1: 'assets/img/user/avatar-1.jpg',
      name: 'James Douglas',
      para: 'Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. . Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu',
      date: 'Jan 10, 2020'
    },
    {
      img: 'assets/img/quote-01.svg',
      img1: 'assets/img/user/avatar-2.jpg',
      name: 'James Douglas',
      para: 'Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. . Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu',
      date: 'Jan 10, 2020'
    },
    {
      img: 'assets/img/quote-01.svg',
      img1: 'assets/img/user/avatar-3.jpg',
      name: 'James Douglas',
      para: 'Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. . Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu',
      date: 'Jan 10, 2020'
    },
    {
      img: 'assets/img/quote-01.svg',
      img1: 'assets/img/user/avatar-5.jpg',
      name: 'James Douglas',
      para: 'Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. . Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu',
      date: 'Jan 10, 2020'
    },
    
  ]

  constructor( private router:Router) { }

  ngOnInit() {
    AOS.init({
      duration: 1200,
		  once: true,
    });
    
    

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
  search(){
    if(this.selected === 'projects'){
      this.router.navigateByUrl('/freelancer/project')
    }else if(this.selected === 'freelancers'){
      this.router.navigateByUrl('/employer/developer')
    }
  }
}
