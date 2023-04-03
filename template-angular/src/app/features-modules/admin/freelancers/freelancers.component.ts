import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/core/services/common/common.service';
// import * as Feather from 'feather-icons';

@Component({
  selector: 'app-freelancers',
  templateUrl: './freelancers.component.html',
  styleUrls: ['./freelancers.component.scss']
})
export class FreelancersComponent implements OnInit {
  base: string="";
  page: string="";
  last: string = '';
  public str2 : any;
  public str : any;
  public filter:boolean = false;
  constructor(private common : CommonService,
    public router: Router,) { 
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
    // console.log(this.str2);
  }
  check(e:any){
    console.log(e);
  }
  openFilter(){
    this.filter = !this.filter
  }
  ngAfterViewInit() {
    // Feather.replace();
  }


}
