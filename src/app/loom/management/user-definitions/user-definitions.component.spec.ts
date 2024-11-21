import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDefinitionsComponent } from './user-definitions.component';

describe('UserDefinitionsComponent', () => {
  let component: UserDefinitionsComponent;
  let fixture: ComponentFixture<UserDefinitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDefinitionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDefinitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
