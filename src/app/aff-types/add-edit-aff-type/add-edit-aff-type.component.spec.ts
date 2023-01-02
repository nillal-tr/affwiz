import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAffTypeComponent } from './add-edit-aff-type.component';

describe('AddEditAffTypeComponent', () => {
  let component: AddEditAffTypeComponent;
  let fixture: ComponentFixture<AddEditAffTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAffTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditAffTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
