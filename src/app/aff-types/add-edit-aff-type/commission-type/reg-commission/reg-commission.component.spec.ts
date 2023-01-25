import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegCommissionComponent } from './reg-commission.component';

describe('RegCommissionComponent', () => {
  let component: RegCommissionComponent;
  let fixture: ComponentFixture<RegCommissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegCommissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
