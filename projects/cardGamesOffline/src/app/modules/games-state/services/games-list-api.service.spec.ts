import { TestBed } from '@angular/core/testing';

import { GamesListApiService } from './games-list-api.service';

describe('GamesListApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GamesListApiService = TestBed.get(GamesListApiService);
    expect(service).toBeTruthy();
  });
});
