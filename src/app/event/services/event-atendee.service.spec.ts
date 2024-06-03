import { TestBed } from '@angular/core/testing';

import { EventAtendeeService } from './event-atendee.service';

describe('EventAtendeeService', () => {
  let service: EventAtendeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventAtendeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
