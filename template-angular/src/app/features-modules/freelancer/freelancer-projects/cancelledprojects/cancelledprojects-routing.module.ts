import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelledprojectsComponent } from './cancelledprojects.component';

const routes: Routes = [{ path: '', component: CancelledprojectsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CancelledprojectsRoutingModule { }
