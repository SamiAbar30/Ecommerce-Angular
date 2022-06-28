import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductaplicationComponent } from './productaplication.component';

describe('ProductaplicationComponent', () => {
  let component: ProductaplicationComponent;
  let fixture: ComponentFixture<ProductaplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductaplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductaplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
