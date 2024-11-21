import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTypeDefinitionsComponent } from './material-type-definitions.component';

describe('MaterialTypeDefinitionsComponent', () => {
  let component: MaterialTypeDefinitionsComponent;
  let fixture: ComponentFixture<MaterialTypeDefinitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialTypeDefinitionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialTypeDefinitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
