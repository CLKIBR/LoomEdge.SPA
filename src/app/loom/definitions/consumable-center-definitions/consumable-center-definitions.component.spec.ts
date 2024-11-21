import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumableCenterDefinitionsComponent } from './consumable-center-definitions.component';

describe('ConsumableCenterDefinitionsComponent', () => {
  let component: ConsumableCenterDefinitionsComponent;
  let fixture: ComponentFixture<ConsumableCenterDefinitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumableCenterDefinitionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumableCenterDefinitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
