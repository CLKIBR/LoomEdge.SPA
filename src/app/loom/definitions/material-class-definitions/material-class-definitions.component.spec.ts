import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialClassDefinitionsComponent } from './material-class-definitions.component';

describe('MaterialClassDefinitionsComponent', () => {
  let component: MaterialClassDefinitionsComponent;
  let fixture: ComponentFixture<MaterialClassDefinitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialClassDefinitionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialClassDefinitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
