import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitOperationsComponent } from './exit-operations.component';

describe('ExitOperationsComponent', () => {
  let component: ExitOperationsComponent;
  let fixture: ComponentFixture<ExitOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExitOperationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExitOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
