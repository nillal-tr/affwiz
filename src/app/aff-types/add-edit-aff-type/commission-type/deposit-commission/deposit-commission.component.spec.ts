import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositCommissionComponent } from './deposit-commission.component';

describe('DepositCommissionComponent', () => {
  let component: DepositCommissionComponent;
  let fixture: ComponentFixture<DepositCommissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositCommissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
