import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendancelistComponentComponent } from './attendancelist-component.component';

describe('AttendancelistComponentComponent', () => {
  let component: AttendancelistComponentComponent;
  let fixture: ComponentFixture<AttendancelistComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendancelistComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendancelistComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
