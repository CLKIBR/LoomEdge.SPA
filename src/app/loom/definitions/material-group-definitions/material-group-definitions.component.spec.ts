import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialGroupDefinitionsComponent } from './material-group-definitions.component';

describe('MaterialGroupDefinitionsComponent', () => {
  let component: MaterialGroupDefinitionsComponent;
  let fixture: ComponentFixture<MaterialGroupDefinitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialGroupDefinitionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialGroupDefinitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
