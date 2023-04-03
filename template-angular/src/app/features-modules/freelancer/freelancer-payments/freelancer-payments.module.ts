import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreelancerPaymentsRoutingModule } from './freelancer-payments-routing.module';
import { FreelancerPaymentsComponent } from './freelancer-payments.component';


@NgModule({
  declarations: [
    FreelancerPaymentsComponent
  ],
  imports: [
    CommonModule,
    FreelancerPaymentsRoutingModule
  ]
})
export class FreelancerPaymentsModule { }
