import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProjectRoutingModule } from './edit-project-routing.module';
import { EditProjectComponent } from './edit-project.component';
import { TagInputModule } from 'ngx-chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';


@NgModule({
  declarations: [
    EditProjectComponent
  ],
  imports: [
    CommonModule,
    EditProjectRoutingModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
    TagInputModule
  ]
})
export class EditProjectModule { }
