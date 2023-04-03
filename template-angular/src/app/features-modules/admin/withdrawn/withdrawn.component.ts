import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/core/services/common/common.service';
@Component({
  selector: 'app-withdrawn',
  templateUrl: './withdrawn.component.html',
  styleUrls: ['./withdrawn.component.scss']
})
export class WithdrawnComponent implements OnInit {
  public filter:boolean = false;
  base: string="";
  page: string="";
  last: string = '';
  public str2 : any;
  public str : any;
  constructor(private common : CommonService,
    public router: Router) {
      this.common.base.subscribe((res:string)=>{
        this.base =res;
      })
      this.common.page.subscribe((res:string)=>{
        this.page =res;
      })
      this.common.last.subscribe((res:string)=>{
        this.last =res;
        this.str = this.last;
        this.str2 = this.str.charAt(0).toUpperCase() + this.str.slice(1);
      })
     }

  ngOnInit(): void {
  }
  openFilter(){
    this.filter = !this.filter
  }

}
