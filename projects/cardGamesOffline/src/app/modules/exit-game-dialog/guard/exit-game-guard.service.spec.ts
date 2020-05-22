import { TestBed } from '@angular/core/testing';

import { ExitGameGuardService } from './exit-game-guard.service';

describe('ExitGameGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExitGameGuardService = TestBed.get(ExitGameGuardService);
    expect(service).toBeTruthy();
  });
});
