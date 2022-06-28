import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilapplicatoinComponent } from './accueilapplicatoin.component';

describe('AccueilapplicatoinComponent', () => {
  let component: AccueilapplicatoinComponent;
  let fixture: ComponentFixture<AccueilapplicatoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilapplicatoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilapplicatoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
