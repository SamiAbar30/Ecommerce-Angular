import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListproductpageComponent } from './listproductpage.component';

describe('ListproductpageComponent', () => {
  let component: ListproductpageComponent;
  let fixture: ComponentFixture<ListproductpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListproductpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListproductpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
