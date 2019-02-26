import { TestBed } from '@angular/core/testing';

import { ComponentManagerService } from './component-manager.service';

describe('ComponentManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentManagerService = TestBed.get(ComponentManagerService);
    expect(service).toBeTruthy();
  });
});
