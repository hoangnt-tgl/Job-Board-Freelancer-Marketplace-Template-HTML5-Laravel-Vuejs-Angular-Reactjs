import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancelledprojectsRoutingModule } from './cancelledprojects-routing.module';
import { CancelledprojectsComponent } from './cancelledprojects.component';


@NgModule({
  declarations: [
    CancelledprojectsComponent
  ],
  imports: [
    CommonModule,
    CancelledprojectsRoutingModule
  ]
})
export class CancelledprojectsModule { }
