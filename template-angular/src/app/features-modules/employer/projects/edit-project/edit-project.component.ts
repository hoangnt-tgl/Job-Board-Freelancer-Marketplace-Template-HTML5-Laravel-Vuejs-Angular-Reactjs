import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import jsonDoc from './docs'

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {
  editordoc = jsonDoc;
  editor: Editor | any;
  ishidden: boolean = false;
  public educationalArray: any = [1];
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form = new FormGroup({
    editorContent: new FormControl(
      { value: jsonDoc, disabled: false },
      Validators.required()
    ),
  });

  constructor() { }

  ngOnInit(): void {
    this.editor = new Editor();
  }
  
  ngOnDestroy(): void {
    this.editor.destroy();
  }
  public addEducation():void {
    this.educationalArray.push(1)
  }
  public deleteEducation(index:any):void {
    this.educationalArray.splice(index, 1)
  }
  tag = ['Valve profit'];
  pricingOption(event:any) {
    let pricetype = event.target['value'] 
    if (pricetype == 'price_free') {
      this.ishidden = false
    }
    else (
      this.ishidden = true
    )
  }
}
