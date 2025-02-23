import { TestBed } from '@angular/core/testing';

import { ResAvailabilityService } from './res-availability.service';

describe('ResAvailabilityService', () => {
  let service: ResAvailabilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResAvailabilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
