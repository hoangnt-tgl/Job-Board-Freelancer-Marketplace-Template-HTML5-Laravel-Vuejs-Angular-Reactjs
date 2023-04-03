import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreelancerListRoutingModule } from './freelancer-list-routing.module';
import { FreelancerListComponent } from './freelancer-list.component';


@NgModule({
  declarations: [
    FreelancerListComponent
  ],
  imports: [
    CommonModule,
    FreelancerListRoutingModule
  ]
})
export class FreelancerListModule { }
