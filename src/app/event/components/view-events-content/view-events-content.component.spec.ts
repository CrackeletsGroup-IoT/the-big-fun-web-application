import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEventsContentComponent } from './view-events-content.component';

describe('ViewEventsContentComponent', () => {
  let component: ViewEventsContentComponent;
  let fixture: ComponentFixture<ViewEventsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEventsContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEventsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
