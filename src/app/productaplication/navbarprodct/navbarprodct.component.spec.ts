import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarprodctComponent } from './navbarprodct.component';

describe('NavbarprodctComponent', () => {
  let component: NavbarprodctComponent;
  let fixture: ComponentFixture<NavbarprodctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarprodctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarprodctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
