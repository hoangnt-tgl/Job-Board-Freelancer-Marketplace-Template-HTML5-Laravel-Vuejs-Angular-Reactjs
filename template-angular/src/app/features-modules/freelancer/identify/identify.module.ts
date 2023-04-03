import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentifyRoutingModule } from './identify-routing.module';
import { IdentifyComponent } from './identify.component';


@NgModule({
  declarations: [
    IdentifyComponent
  ],
  imports: [
    CommonModule,
    IdentifyRoutingModule
  ]
})
export class IdentifyModule { }
