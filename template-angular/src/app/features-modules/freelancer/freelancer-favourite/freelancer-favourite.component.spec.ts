import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerFavouriteComponent } from './freelancer-favourite.component';

describe('FreelancerFavouriteComponent', () => {
  let component: FreelancerFavouriteComponent;
  let fixture: ComponentFixture<FreelancerFavouriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreelancerFavouriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreelancerFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
