import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyTraderCommissionComponent } from './copy-trader-commission.component';

describe('CopyTraderCommissionComponent', () => {
  let component: CopyTraderCommissionComponent;
  let fixture: ComponentFixture<CopyTraderCommissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyTraderCommissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyTraderCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
