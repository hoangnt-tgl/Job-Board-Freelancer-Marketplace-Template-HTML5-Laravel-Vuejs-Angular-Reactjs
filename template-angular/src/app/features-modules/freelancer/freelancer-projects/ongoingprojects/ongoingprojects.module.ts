import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OngoingprojectsRoutingModule } from './ongoingprojects-routing.module';
import { OngoingprojectsComponent } from './ongoingprojects.component';


@NgModule({
  declarations: [
    OngoingprojectsComponent
  ],
  imports: [
    CommonModule,
    OngoingprojectsRoutingModule
  ]
})
export class OngoingprojectsModule { }
