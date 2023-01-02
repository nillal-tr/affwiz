import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideMenuComponentComponent } from './aside-menu-component.component';

describe('AsideMenuComponentComponent', () => {
  let component: AsideMenuComponentComponent;
  let fixture: ComponentFixture<AsideMenuComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideMenuComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideMenuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
