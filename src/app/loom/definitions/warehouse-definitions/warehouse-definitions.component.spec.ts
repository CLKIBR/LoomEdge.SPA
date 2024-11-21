import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseDefinitionsComponent } from './warehouse-definitions.component';

describe('WarehouseDefinitionsComponent', () => {
  let component: WarehouseDefinitionsComponent;
  let fixture: ComponentFixture<WarehouseDefinitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarehouseDefinitionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseDefinitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
