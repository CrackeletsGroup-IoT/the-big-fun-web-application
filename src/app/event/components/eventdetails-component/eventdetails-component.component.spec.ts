import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventdetailsComponentComponent } from './eventdetails-component.component';

describe('EventdetailsComponentComponent', () => {
  let component: EventdetailsComponentComponent;
  let fixture: ComponentFixture<EventdetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventdetailsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventdetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
