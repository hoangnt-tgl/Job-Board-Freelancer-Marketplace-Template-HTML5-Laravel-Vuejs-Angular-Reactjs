import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreelancerDetailsRoutingModule } from './freelancer-details-routing.module';
import { FreelancerDetailsComponent } from './freelancer-details.component';


@NgModule({
  declarations: [
    FreelancerDetailsComponent
  ],
  imports: [
    CommonModule,
    FreelancerDetailsRoutingModule
  ]
})
export class FreelancerDetailsModule { }
