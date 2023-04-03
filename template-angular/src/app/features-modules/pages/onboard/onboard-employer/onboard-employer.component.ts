import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboard-employer',
  templateUrl: './onboard-employer.component.html',
  styleUrls: ['./onboard-employer.component.scss']
})
export class OnboardEmployerComponent implements OnInit {
  first:any = 1;
  public isChecked:boolean = true;
  public serviceArray: any = [];
  constructor() { }

  ngOnInit(): void {

  }
  public addService():void {
    this.serviceArray.push(1)
  }
  public deleteService(index:any):void {
    this.serviceArray.splice(index, 1)
  }
  next(stage:any):void {
    this.first = stage;
  }
}
