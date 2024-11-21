import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockQuantityControlComponent } from './stock-quantity-control.component';

describe('StockQuantityControlComponent', () => {
  let component: StockQuantityControlComponent;
  let fixture: ComponentFixture<StockQuantityControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockQuantityControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockQuantityControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
