import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadCommissionComponent } from './lead-commission.component';

describe('LeadCommissionComponent', () => {
  let component: LeadCommissionComponent;
  let fixture: ComponentFixture<LeadCommissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadCommissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
