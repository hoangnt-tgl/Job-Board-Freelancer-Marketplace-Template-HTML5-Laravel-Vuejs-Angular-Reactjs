import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreelancerSettingsRoutingModule } from './freelancer-settings-routing.module';
import { FreelancerSettingsComponent } from './freelancer-settings.component';


@NgModule({
  declarations: [
    FreelancerSettingsComponent
  ],
  imports: [
    CommonModule,
    FreelancerSettingsRoutingModule
  ]
})
export class FreelancerSettingsModule { }
