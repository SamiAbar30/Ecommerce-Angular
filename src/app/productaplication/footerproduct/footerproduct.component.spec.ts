import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterproductComponent } from './footerproduct.component';

describe('FooterproductComponent', () => {
  let component: FooterproductComponent;
  let fixture: ComponentFixture<FooterproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
