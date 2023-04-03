import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompletedprojectsRoutingModule } from './completedprojects-routing.module';
import { CompletedprojectsComponent } from './completedprojects.component';


@NgModule({
  declarations: [
    CompletedprojectsComponent
  ],
  imports: [
    CommonModule,
    CompletedprojectsRoutingModule
  ]
})
export class CompletedprojectsModule { }
