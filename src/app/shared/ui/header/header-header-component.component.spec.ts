import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHeaderComponentComponent } from './header-header-component.component';

describe('HeaderHeaderComponentComponent', () => {
  let component: HeaderHeaderComponentComponent;
  let fixture: ComponentFixture<HeaderHeaderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderHeaderComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
