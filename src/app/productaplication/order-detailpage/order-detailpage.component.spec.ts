import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailpageComponent } from './order-detailpage.component';

describe('OrderDetailpageComponent', () => {
  let component: OrderDetailpageComponent;
  let fixture: ComponentFixture<OrderDetailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
