import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseStatusReportComponent } from './warehouse-status-report.component';

describe('WarehouseStatusReportComponent', () => {
  let component: WarehouseStatusReportComponent;
  let fixture: ComponentFixture<WarehouseStatusReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarehouseStatusReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseStatusReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
