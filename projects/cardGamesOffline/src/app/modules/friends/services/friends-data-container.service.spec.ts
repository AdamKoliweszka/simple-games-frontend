import { TestBed } from '@angular/core/testing';

import { FriendsDataContainerService } from './friends-data-container.service';

describe('FriendsDataContainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FriendsDataContainerService = TestBed.get(FriendsDataContainerService);
    expect(service).toBeTruthy();
  });
});
