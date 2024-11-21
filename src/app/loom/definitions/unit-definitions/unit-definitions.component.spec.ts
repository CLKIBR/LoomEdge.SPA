import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitDefinitionsComponent } from './unit-definitions.component';

describe('UnitDefinitionsComponent', () => {
  let component: UnitDefinitionsComponent;
  let fixture: ComponentFixture<UnitDefinitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitDefinitionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitDefinitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
