import { TestBed } from '@angular/core/testing';

import { CardCollectionManagerService } from './card-collection-manager.service';

describe('CardCollectionManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardCollectionManagerService = TestBed.get(CardCollectionManagerService);
    expect(service).toBeTruthy();
  });
});
