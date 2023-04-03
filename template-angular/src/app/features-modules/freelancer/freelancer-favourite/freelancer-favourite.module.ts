import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreelancerFavouriteRoutingModule } from './freelancer-favourite-routing.module';
import { FreelancerFavouriteComponent } from './freelancer-favourite.component';


@NgModule({
  declarations: [
    FreelancerFavouriteComponent
  ],
  imports: [
    CommonModule,
    FreelancerFavouriteRoutingModule
  ]
})
export class FreelancerFavouriteModule { }
