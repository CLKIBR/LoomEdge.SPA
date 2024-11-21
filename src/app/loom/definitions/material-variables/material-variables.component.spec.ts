import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialVariablesComponent } from './material-variables.component';

describe('MaterialVariablesComponent', () => {
  let component: MaterialVariablesComponent;
  let fixture: ComponentFixture<MaterialVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialVariablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
