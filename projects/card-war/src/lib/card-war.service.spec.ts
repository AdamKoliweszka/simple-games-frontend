import { TestBed } from '@angular/core/testing';

import { CardWarService } from './card-war.service';

describe('CardWarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardWarService = TestBed.get(CardWarService);
    expect(service).toBeTruthy();
  });
});
