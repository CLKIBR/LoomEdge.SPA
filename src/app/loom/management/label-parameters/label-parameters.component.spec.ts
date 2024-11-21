import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelParametersComponent } from './label-parameters.component';

describe('LabelParametersComponent', () => {
  let component: LabelParametersComponent;
  let fixture: ComponentFixture<LabelParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelParametersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
