import { TestBed } from '@angular/core/testing';

import { RouteManagerService } from './route-manager.service';

describe('RouteManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteManagerService = TestBed.get(RouteManagerService);
    expect(service).toBeTruthy();
  });
});
