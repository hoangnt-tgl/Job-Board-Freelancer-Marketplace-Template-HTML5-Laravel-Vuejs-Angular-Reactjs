import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-settings',
  templateUrl: './basic-settings.component.html',
  styleUrls: ['./basic-settings.component.scss']
})
export class BasicSettingsComponent implements OnInit {
  gender = 'male';
  category = 'male';
  country = 'india';
  constructor() { }

  ngOnInit(): void {
  }

}
