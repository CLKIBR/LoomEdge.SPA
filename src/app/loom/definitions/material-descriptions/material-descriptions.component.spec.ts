import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDescriptionsComponent } from './material-descriptions.component';

describe('MaterialDescriptionsComponent', () => {
  let component: MaterialDescriptionsComponent;
  let fixture: ComponentFixture<MaterialDescriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialDescriptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialDescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
