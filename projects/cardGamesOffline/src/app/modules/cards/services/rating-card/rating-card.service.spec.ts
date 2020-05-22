import { TestBed } from '@angular/core/testing';

import { RatingCardService } from './rating-card.service';

describe('RatingCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RatingCardService = TestBed.get(RatingCardService);
    expect(service).toBeTruthy();
  });
});
