import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReportsPurchaseComponent } from './order-reports-purchase.component';

describe('OrderReportsPurchaseComponent', () => {
  let component: OrderReportsPurchaseComponent;
  let fixture: ComponentFixture<OrderReportsPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderReportsPurchaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderReportsPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
