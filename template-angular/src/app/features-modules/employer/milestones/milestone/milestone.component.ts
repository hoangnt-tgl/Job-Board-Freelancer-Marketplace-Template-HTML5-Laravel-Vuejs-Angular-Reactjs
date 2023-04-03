import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';

import { Subject } from "rxjs";
import { ShareDataService } from 'src/app/core/data/share-data.service';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.scss']
})
export class MilestoneComponent implements OnInit, OnDestroy {

  public dtTrigger: Subject<any> = new Subject();
  public lstMilestone!: any[];
  public url: any = "milestones";
  constructor(private dataService: ShareDataService) { }

  ngOnInit(): void {
    this.loadMile();

  }
    // Get hostel List  Api Call
    loadMile() {
      this. lstMilestone = this.dataService.mile
    }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
