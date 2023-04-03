import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Subject } from "rxjs";
import { ShareDataService } from 'src/app/core/data/share-data.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, OnDestroy  {
  public lstExam!: any[];
  public url: any = "milestones";
  constructor(private dataService: ShareDataService) { }

  ngOnInit() {
    this.loadExam();

  }
      // Get Exam List  Api Call
  loadExam() {
    this.lstExam = this.dataService.tasks;
  }
  
  

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
  }

}
