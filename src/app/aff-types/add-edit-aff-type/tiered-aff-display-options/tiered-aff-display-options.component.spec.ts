import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TieredAffDisplayOptionsComponent } from './tiered-aff-display-options.component';

describe('TieredAffDisplayOptionsComponent', () => {
  let component: TieredAffDisplayOptionsComponent;
  let fixture: ComponentFixture<TieredAffDisplayOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TieredAffDisplayOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TieredAffDisplayOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
