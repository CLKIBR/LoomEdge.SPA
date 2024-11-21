import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDefinitionsComponent } from './customer-definitions.component';

describe('CustomerDefinitionsComponent', () => {
  let component: CustomerDefinitionsComponent;
  let fixture: ComponentFixture<CustomerDefinitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerDefinitionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDefinitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
