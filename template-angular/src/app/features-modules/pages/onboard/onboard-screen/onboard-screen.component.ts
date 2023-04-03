import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboard-screen',
  templateUrl: './onboard-screen.component.html',
  styleUrls: ['./onboard-screen.component.scss']
})
export class OnboardScreenComponent implements OnInit {
  public serviceArray: any = [];
  public skill: any = [];
  public education: any = [];
  public certification: any = [];
  public experiance: any = [];
  first:any = 1;
  public isChecked:boolean = true;

  constructor() { }
  public addService():void {
    this.serviceArray.push(1)
  }
  public deleteService(index:any):void {
    this.serviceArray.splice(index, 1)
  }
  public addExperiance():void {
    this.experiance.push(1)
  }
  public deleteExperiance(index:any):void {
    this.experiance.splice(index, 1)
  }
  public addCertification():void {
    this.certification.push(1)
  }
  public deleteCertification(index:any):void {
    this.certification.splice(index, 1)
  }
  public addEducation():void {
    this.education.push(1)
  }
  public deleteEducation(index:any):void {
    this.education.splice(index, 1)
  }
  public addSkill():void {
    this.skill.push(1)
  }
  public deleteSkill(index:any):void {
    this.skill.splice(index, 1)
  }
  ngOnInit(): void {

  }
  next(stage:any):void {
    this.first = stage;
  }
  

}
