import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';

import { Subject } from "rxjs";
import { ShareDataService } from 'src/app/core/data/share-data.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit, OnDestroy {

  public dtTrigger: Subject<any> = new Subject();
  public lstFiles!: any[];
  public url: any = "milestones";
  constructor(private dataService: ShareDataService) { }

  ngOnInit(): void {
    this.loadHostel();

  }
    // Get hostel List  Api Call
    loadHostel() {
      this.lstFiles = this.dataService.files
    }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
