import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQpageComponent } from './faqpage.component';

describe('FAQpageComponent', () => {
  let component: FAQpageComponent;
  let fixture: ComponentFixture<FAQpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FAQpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FAQpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
