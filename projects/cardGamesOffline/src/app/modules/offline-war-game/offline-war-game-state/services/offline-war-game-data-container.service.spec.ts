import { TestBed } from '@angular/core/testing';

import { OfflineWarGameDataContainerService } from './offline-war-game-data-container.service';

describe('OfflineWarGameDataContainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfflineWarGameDataContainerService = TestBed.get(OfflineWarGameDataContainerService);
    expect(service).toBeTruthy();
  });
});
