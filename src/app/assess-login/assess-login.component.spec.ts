import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessLoginComponent } from './assess-login.component';

describe('AssessLoginComponent', () => {
  let component: AssessLoginComponent;
  let fixture: ComponentFixture<AssessLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
