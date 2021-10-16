import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentReasonComponent } from './appointment-reason.component';

describe('AppointmentReasonComponent', () => {
  let component: AppointmentReasonComponent;
  let fixture: ComponentFixture<AppointmentReasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentReasonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
