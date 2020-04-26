import { TestBed } from '@angular/core/testing';

import { AuthApiServiceService } from './auth-api-service.service';

describe('AuthApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthApiServiceService = TestBed.get(AuthApiServiceService);
    expect(service).toBeTruthy();
  });
});
