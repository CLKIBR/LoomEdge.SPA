import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelDesignComponent } from './label-design.component';

describe('LabelDesignComponent', () => {
  let component: LabelDesignComponent;
  let fixture: ComponentFixture<LabelDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
