import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerprofileContentComponent } from './organizerprofile-content.component';

describe('OrganizerprofileContentComponent', () => {
  let component: OrganizerprofileContentComponent;
  let fixture: ComponentFixture<OrganizerprofileContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizerprofileContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizerprofileContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
