import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreelancerDetailsComponent } from './freelancer-details.component';

const routes: Routes = [{ path: '', component: FreelancerDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreelancerDetailsRoutingModule { }
