import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDefinitionsComponent } from './location-definitions.component';

describe('LocationDefinitionsComponent', () => {
  let component: LocationDefinitionsComponent;
  let fixture: ComponentFixture<LocationDefinitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationDefinitionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationDefinitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
