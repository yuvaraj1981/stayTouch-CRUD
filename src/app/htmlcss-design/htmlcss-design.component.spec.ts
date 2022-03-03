import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlcssDesignComponent } from './htmlcss-design.component';

describe('HtmlcssDesignComponent', () => {
  let component: HtmlcssDesignComponent;
  let fixture: ComponentFixture<HtmlcssDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlcssDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlcssDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
