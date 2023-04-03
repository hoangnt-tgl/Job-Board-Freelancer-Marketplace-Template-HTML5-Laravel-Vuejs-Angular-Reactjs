import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledprojectsComponent } from './cancelledprojects.component';

describe('CancelledprojectsComponent', () => {
  let component: CancelledprojectsComponent;
  let fixture: ComponentFixture<CancelledprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelledprojectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelledprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
