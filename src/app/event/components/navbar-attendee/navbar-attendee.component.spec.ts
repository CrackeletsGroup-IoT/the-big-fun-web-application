import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAttendeeComponent } from './navbar-attendee.component';

describe('NavbarAttendeeComponent', () => {
  let component: NavbarAttendeeComponent;
  let fixture: ComponentFixture<NavbarAttendeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarAttendeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarAttendeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
