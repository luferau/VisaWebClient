import { TestBed } from '@angular/core/testing';

import { VisaResourceService } from './visa-resource.service';

describe('VisaResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VisaResourceService = TestBed.get(VisaResourceService);
    expect(service).toBeTruthy();
  });
});
