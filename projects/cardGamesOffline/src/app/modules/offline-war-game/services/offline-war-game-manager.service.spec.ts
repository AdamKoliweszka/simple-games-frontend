import { TestBed } from '@angular/core/testing';

import { OfflineWarGameManagerService } from './offline-war-game-manager.service';

describe('OfflineWarGameManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfflineWarGameManagerService = TestBed.get(OfflineWarGameManagerService);
    expect(service).toBeTruthy();
  });
});
