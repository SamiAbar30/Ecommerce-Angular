import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileapplicationComponent } from './profileapplication.component';

describe('ProfileapplicationComponent', () => {
  let component: ProfileapplicationComponent;
  let fixture: ComponentFixture<ProfileapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileapplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
