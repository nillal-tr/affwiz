import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeFormV2Component } from './range-form-v2.component';

describe('RangeFormV2Component', () => {
  let component: RangeFormV2Component;
  let fixture: ComponentFixture<RangeFormV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeFormV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangeFormV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
