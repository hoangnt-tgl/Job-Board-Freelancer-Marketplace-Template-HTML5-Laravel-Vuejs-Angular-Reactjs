import { Component, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/core/data/share-data.service';
@Component({
  selector: 'app-sociallinks',
  templateUrl: './sociallinks.component.html',
  styleUrls: ['./sociallinks.component.scss']
})
export class SociallinksComponent implements OnInit {
  myObjArray = [
    {id: 0, name: "facebook" },
    {id: 1, name: "twitter" },
    {id: 2, name: "youtube" },
    {id: 3, name: "linkedin" }
  ];
  SocialLink: any = [];
  public totalData: any = 0;
  public serviceArray: any = [];
  removeIcon:boolean = true;
  removeIcon2:boolean = true;
  removeIcon3:boolean = true;
  removeIcon4:boolean = true;
  constructor(private data: ShareDataService) { }
  public addService():void {
    this.serviceArray.push(1)
  }
  public deleteService(index:any):void {
    this.serviceArray.splice(index, 1)
  }
  private SocialLinks(): void {
    this.SocialLink = [];

    this.data.socialLink().subscribe((res: any) => {
      this.totalData = res.totalData;
      res.data.map((res: any) => {
        this.SocialLink.push(res);
      });
    });

 
  }
  ngOnInit(): void {
    this.SocialLinks();
  }

}
