import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreelancerRoutingModule } from './freelancer-routing.module';
import { FreelancerComponent } from './freelancer.component';


@NgModule({
  declarations: [
    FreelancerComponent
  ],
  imports: [
    CommonModule,
    FreelancerRoutingModule
  ]
})
export class FreelancerModule { }
