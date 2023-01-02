import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAffTypeComponent } from './view-aff-type.component';

describe('ViewAffTypeComponent', () => {
  let component: ViewAffTypeComponent;
  let fixture: ComponentFixture<ViewAffTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAffTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAffTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
