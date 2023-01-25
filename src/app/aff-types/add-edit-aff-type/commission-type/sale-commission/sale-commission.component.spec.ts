import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleCommissionComponent } from './sale-commission.component';

describe('SaleCommissionComponent', () => {
  let component: SaleCommissionComponent;
  let fixture: ComponentFixture<SaleCommissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleCommissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
