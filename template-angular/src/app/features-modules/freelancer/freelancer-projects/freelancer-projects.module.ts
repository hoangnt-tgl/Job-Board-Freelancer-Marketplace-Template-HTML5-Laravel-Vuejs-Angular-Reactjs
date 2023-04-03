import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreelancerProjectsRoutingModule } from './freelancer-projects-routing.module';
import { FreelancerProjectsComponent } from './freelancer-projects.component';


@NgModule({
  declarations: [
    FreelancerProjectsComponent
  ],
  imports: [
    CommonModule,
    FreelancerProjectsRoutingModule
  ]
})
export class FreelancerProjectsModule { }
