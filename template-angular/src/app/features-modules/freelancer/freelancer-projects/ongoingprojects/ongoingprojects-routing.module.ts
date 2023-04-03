import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OngoingprojectsComponent } from './ongoingprojects.component';

const routes: Routes = [{ path: '', component: OngoingprojectsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OngoingprojectsRoutingModule { }
