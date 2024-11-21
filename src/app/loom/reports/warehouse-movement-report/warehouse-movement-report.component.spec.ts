import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseMovementReportComponent } from './warehouse-movement-report.component';

describe('WarehouseMovementReportComponent', () => {
  let component: WarehouseMovementReportComponent;
  let fixture: ComponentFixture<WarehouseMovementReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarehouseMovementReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseMovementReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
