import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferOperationsComponent } from './transfer-operations.component';

describe('TransferOperationsComponent', () => {
  let component: TransferOperationsComponent;
  let fixture: ComponentFixture<TransferOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferOperationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
