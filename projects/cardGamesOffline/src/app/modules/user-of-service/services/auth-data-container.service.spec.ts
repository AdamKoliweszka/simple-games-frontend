import { TestBed } from '@angular/core/testing';

import { AuthDataContainerService } from './auth-data-container.service';

describe('AuthDataContainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthDataContainerService = TestBed.get(AuthDataContainerService);
    expect(service).toBeTruthy();
  });
});
