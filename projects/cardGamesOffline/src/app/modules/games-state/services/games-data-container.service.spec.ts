import { TestBed } from '@angular/core/testing';

import { GamesDataContainerService } from './games-data-container.service';

describe('GamesDataContainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GamesDataContainerService = TestBed.get(GamesDataContainerService);
    expect(service).toBeTruthy();
  });
});
