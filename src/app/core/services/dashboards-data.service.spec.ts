import { TestBed } from '@angular/core/testing';

import { DashboardsDataService } from './dashboards-data.service';

describe('DashboardsDataService', () => {
  let service: DashboardsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
