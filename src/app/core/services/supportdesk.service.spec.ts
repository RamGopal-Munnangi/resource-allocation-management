import { TestBed } from '@angular/core/testing';

import { SupportdeskService } from './supportdesk.service';

describe('SupportdeskService', () => {
  let service: SupportdeskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupportdeskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
