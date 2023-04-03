import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public skillsArray: any = [1,2,3,4,5,6];
  public awardsArray: any = [1,2,3];
  public langArray: any = [1,2,3];
  public expArray: any = [1];
  public eduArray: any = [1];
  gender = 'male';
  type = 'select';
  country = 'india';
  degree = 'select';
  constructor() { }

  ngOnInit(): void {
  }
  public addSkills():void {
    this.skillsArray.push(1)
  }
  public deleteSkills(index:any):void {
    this.skillsArray.splice(index, 1)
  }
  public addAward():void {
    this.awardsArray.push(1)
  }
  public deleteAward(index:any):void {
    this.awardsArray.splice(index, 1)
  }
  public addLang():void {
    this.langArray.push(1)
  }
  public deleteLang(index:any):void {
    this.langArray.splice(index, 1)
  }
  public addExp():void {
    this.expArray.push(1)
  }
  public deleteExp(index:any):void {
    this.expArray.splice(index, 1)
  }
  public addEdu():void {
    this.eduArray.push(1)
  }
  public deleteEdu(index:any):void {
    this.eduArray.splice(index, 1)
  }


}
