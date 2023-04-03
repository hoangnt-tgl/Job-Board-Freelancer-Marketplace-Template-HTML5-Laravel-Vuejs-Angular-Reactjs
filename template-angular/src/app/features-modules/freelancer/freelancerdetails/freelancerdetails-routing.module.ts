import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreelancerdetailsComponent } from './freelancerdetails.component';

const routes: Routes = [{ path: '', component: FreelancerdetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreelancerdetailsRoutingModule { }
