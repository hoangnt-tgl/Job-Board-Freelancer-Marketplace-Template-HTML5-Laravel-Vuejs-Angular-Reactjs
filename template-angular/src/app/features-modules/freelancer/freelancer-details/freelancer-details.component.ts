import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freelancer-details',
  templateUrl: './freelancer-details.component.html',
  styleUrls: ['./freelancer-details.component.scss']
})
export class FreelancerDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
}
images = [
  {
    path: 'assets/img/project-8.jpg',
    name:'Education',
    role:'Web design'
  },
  {
    path: 'assets/img/project-9.jpg',
    name:'PHOTOSHOOT',
    role:'Web design'
  },
  {
    path: 'assets/img/project-10.jpg',
    name:'ELECTRICAL',
    role:'Web design'
  },
  {
    path: 'assets/img/project-11.jpg',
    name:'PROJECT NAME',
    role:'Web design'
  },
]

}
