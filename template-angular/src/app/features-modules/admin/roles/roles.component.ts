import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  public filter:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
    //Filter toggle
    openFilter(){
      this.filter = !this.filter
    }

}
