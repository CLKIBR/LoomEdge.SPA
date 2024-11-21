import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseAgingReportComponent } from './warehouse-aging-report.component';

describe('WarehouseAgingReportComponent', () => {
  let component: WarehouseAgingReportComponent;
  let fixture: ComponentFixture<WarehouseAgingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarehouseAgingReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseAgingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
