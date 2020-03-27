import { TestBed } from '@angular/core/testing';

import { GameSelectPageRouteGuardService } from './game-select-page-route-guard.service';

describe('GameSelectPageRouteGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameSelectPageRouteGuardService = TestBed.get(GameSelectPageRouteGuardService);
    expect(service).toBeTruthy();
  });
});
