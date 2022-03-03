import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessRequirementsComponent } from './assess-requirements.component';

describe('AssessRequirementsComponent', () => {
  let component: AssessRequirementsComponent;
  let fixture: ComponentFixture<AssessRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessRequirementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
