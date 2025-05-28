import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanAndPricingComponent } from './plan-and-pricing.component';

describe('PlanAndPricingComponent', () => {
  let component: PlanAndPricingComponent;
  let fixture: ComponentFixture<PlanAndPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanAndPricingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanAndPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
