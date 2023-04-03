import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreelancerdetailsRoutingModule } from './freelancerdetails-routing.module';
import { FreelancerdetailsComponent } from './freelancerdetails.component';


@NgModule({
  declarations: [
    FreelancerdetailsComponent
  ],
  imports: [
    CommonModule,
    FreelancerdetailsRoutingModule
  ]
})
export class FreelancerdetailsModule { }
