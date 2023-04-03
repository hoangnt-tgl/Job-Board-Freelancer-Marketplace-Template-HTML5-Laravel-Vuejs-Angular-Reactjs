import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerPaymentsComponent } from './freelancer-payments.component';

describe('FreelancerPaymentsComponent', () => {
  let component: FreelancerPaymentsComponent;
  let fixture: ComponentFixture<FreelancerPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancerPaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
