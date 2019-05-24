import { TestBed } from '@angular/core/testing';

import { ArbitreServiceService } from './arbitre-service.service';

describe('ArbitreServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArbitreServiceService = TestBed.get(ArbitreServiceService);
    expect(service).toBeTruthy();
  });
});
