import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  removePic:boolean = true;
  removeIcon:boolean = true;
  constructor() { }
  removePicture(){
    this.removePic = !this.removePic; 
  }
  removeFavicon(){
    this.removeIcon = !this.removeIcon; 
  }
  ngOnInit(): void {
  }

}
