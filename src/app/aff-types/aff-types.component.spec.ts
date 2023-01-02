import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffTypesComponent } from './aff-types.component';

describe('AffTypesComponent', () => {
  let component: AffTypesComponent;
  let fixture: ComponentFixture<AffTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
