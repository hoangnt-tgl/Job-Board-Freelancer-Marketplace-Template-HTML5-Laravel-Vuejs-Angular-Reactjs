import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';

import { Subject } from "rxjs";
import { ShareDataService } from 'src/app/core/data/share-data.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit, OnDestroy {

  public dtTrigger: Subject<any> = new Subject();
  public lstPayment!: any[];
  public url: any = "milestones";
  constructor(private dataService: ShareDataService) { }

  ngOnInit(): void {
    this.loadPay();

  }
    // Get payment List  Api Call
    loadPay() {
      this.lstPayment = this.dataService.payment
    }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
