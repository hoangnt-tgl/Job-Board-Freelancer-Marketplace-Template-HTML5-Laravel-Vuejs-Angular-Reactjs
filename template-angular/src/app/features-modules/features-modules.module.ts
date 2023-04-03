import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesModulesRoutingModule } from './features-modules-routing.module';
import { FeaturesModulesComponent } from './features-modules.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { FreelancerheaderComponent } from './common/freelancerheader/freelancerheader.component';
import { EmployerheaderComponent } from './common/employerheader/employerheader.component';



@NgModule({
  declarations: [
    FeaturesModulesComponent,
    HeaderComponent,
    FooterComponent,
  
  
  ],
  imports: [
    CommonModule,
    FeaturesModulesRoutingModule,
  ],

})
export class FeaturesModulesModule { }
