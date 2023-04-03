import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as AOS from 'aos';

@Component({
  selector: 'app-home5',
  templateUrl: './home5.component.html',
  styleUrls: ['./home5.component.scss']
})
export class Home5Component implements OnInit {
  selected = 'freelancers';
  getLink = "project"
  constructor(private router:Router) { }

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

  customsOption: OwlOptions = {
    loop: true,
    margin: 30,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>'
    ],
    responsive: {
      0: {
        items: 2
      },
      768 : {
        items: 2
      },
      1170: {
        items: 2
      }
  },
    nav: true
  }

  hiredslides = [
    {
      image: 'assets/img/user/avatar-1.jpg',
      name: 'George Wells',
      role: 'UI/UX Designer',
      amount: '25 Hourly',
    },
    {
      image: 'assets/img/user/avatar-2.jpg',
      name: 'George Wells',
      role: 'UI/UX Designer',
      amount: '25 Hourly',
    },
    {
      image: 'assets/img/user/avatar-7.jpg',
      name: 'George Wells',
      role: 'UI/UX Designer',
      amount: '25 Hourly',
    },
    {
      image: 'assets/img/user/avatar-4.jpg',
      name: 'George Wells',
      role: 'UI/UX Designer',
      amount: '25 Hourly',
    },
  ]

  customOption: OwlOptions = {
    loop: true,
    margin: 30,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
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

  developslide = [
    {
      para: 'Eget aenean accumsan Search School, OLorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan Eget Eget aenean accumsan Search School, OLorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan Eget ',
      img: 'assets/img/review/review-01.jpg',
      name: 'Janet Paden',
      role: 'iOS Developer'
    },
    {
      para: 'Eget aenean accumsan Search School, OLorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan Eget Eget aenean accumsan Search School, OLorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan Eget ',
      img: 'assets/img/review/review-02.jpg',
      name: 'Janet Paden',
      role: 'iOS Developer'
    },
    {
      para: 'Eget aenean accumsan Search School, OLorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan Eget Eget aenean accumsan Search School, OLorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan Eget ',
      img: 'assets/img/review/review-03.jpg',
      name: 'Janet Paden',
      role: 'iOS Developer'
    },
    {
      para: 'Eget aenean accumsan Search School, OLorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan Eget Eget aenean accumsan Search School, OLorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan Eget ',
      img: 'assets/img/review/review-01.jpg',
      name: 'Janet Paden',
      role: 'iOS Developer'
    },
  ]

}
