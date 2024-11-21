import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOperationsComponent } from './login-operations.component';

describe('LoginOperationsComponent', () => {
  let component: LoginOperationsComponent;
  let fixture: ComponentFixture<LoginOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginOperationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
