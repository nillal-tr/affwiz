import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAffTypeComponent } from './new-aff-type.component';

describe('NewAffTypeComponent', () => {
  let component: NewAffTypeComponent;
  let fixture: ComponentFixture<NewAffTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAffTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAffTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
