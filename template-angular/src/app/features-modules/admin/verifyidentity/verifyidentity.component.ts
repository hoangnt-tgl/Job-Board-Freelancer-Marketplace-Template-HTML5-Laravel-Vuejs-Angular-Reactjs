import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';

import { Subject } from "rxjs";
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Sort } from '@angular/material/sort';
import { ShareDataService } from 'src/app/core/data/share-data.service';

@Component({
  selector: 'app-verifyidentity',
  templateUrl: './verifyidentity.component.html',
  styleUrls: ['./verifyidentity.component.scss']
})
export class VerifyidentityComponent implements OnInit {

  public searchDataValue = '';
  dataSource!: MatTableDataSource<any>;

  // pagination variables
  public lastIndex: number = 0;
  public pageSize: number = 10;
  public totalData: any = 0;
  public skip: number = 0;
  public limit: number = this.pageSize;
  public pageIndex: number = 0;
  public serialNumberArray: Array<any> = [];
  public currentPage: number = 1;
  public pageNumberArray: Array<any> = [];
  public pageSelection: Array<pageSelection> = [];
  public totalPages: number = 0;
  public lstIdentity!: any[];
  public url: any = "admin";
  public filter:boolean = false;
  constructor(private data: ShareDataService ) { }

  ngOnInit(): void {
    this.getlstIdentity();

  }
    //Filter toggle
    openFilter(){
      this.filter = !this.filter
    }
    private getlstIdentity(): void {
      this.lstIdentity = [];
      this.serialNumberArray = [];
  
      this.data.adminIdentityList().subscribe((res: any) => {
        this.totalData = res.totalData;
        res.data.map((res: any, index: number) => {
          let serialNumber = index + 1;
          if (index >= this.skip && serialNumber <= this.limit) {
            res.id = serialNumber;
            this.lstIdentity.push(res);
            this.serialNumberArray.push(serialNumber);
          }
        });
           this.dataSource = new MatTableDataSource<any>(this.lstIdentity);
      this.calculateTotalPages(this.totalData, this.pageSize);
      });
  
   
    }
    public sortData(sort: Sort) {
      const data = this.lstIdentity.slice();
  
      if (!sort.active || sort.direction === '') {
        this.lstIdentity = data;
      } else {
        this.lstIdentity = data.sort((a: any, b: any) => {
          const aValue = (a as any)[sort.active];
          const bValue = (b as any)[sort.active];
          return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
        });
      }
    }
  
    public searchData(value: any): void {
      this.dataSource.filter = value.trim().toLowerCase();
      this.lstIdentity = this.dataSource.filteredData;
    }
  
    public getMoreData(event: string): void {
      if (event == 'next') {
        this.currentPage++;
        this.pageIndex = this.currentPage - 1;
        this.limit += this.pageSize;
        this.skip = this.pageSize * this.pageIndex;
        this.getlstIdentity();
      } else if (event == 'previous') {
        this.currentPage--;
        this.pageIndex = this.currentPage - 1;
        this.limit -= this.pageSize;
        this.skip = this.pageSize * this.pageIndex;
        this.getlstIdentity();
      }
    }
  
    public moveToPage(pageNumber: number): void {
      this.currentPage = pageNumber;
      this.skip = this.pageSelection[pageNumber - 1].skip;
      this.limit = this.pageSelection[pageNumber - 1].limit;
      if (pageNumber > this.currentPage) {
        this.pageIndex = pageNumber - 1;
      } else if (pageNumber < this.currentPage) {
        this.pageIndex = pageNumber + 1;
      }
      this.getlstIdentity();
    }
  
    public changePageSize(): void {
      this.pageSelection = [];
      this.limit = this.pageSize;
      this.skip = 0;
      this.currentPage = 1;
      this.getlstIdentity();
    }
  
    private calculateTotalPages(totalData: number, pageSize: number): void {
      this.pageNumberArray = [];
      this.totalPages = totalData / pageSize;
      if (this.totalPages % 1 != 0) {
        this.totalPages = Math.trunc(this.totalPages + 1);
      }
      for (var i = 1; i <= this.totalPages; i++) {
        let limit = pageSize * i;
        let skip = limit - pageSize;
        this.pageNumberArray.push(i);
        this.pageSelection.push({ skip: skip, limit: limit });
      }
    }
}
export interface pageSelection {
  skip: number;
  limit: number;
}
