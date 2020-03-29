import { TestBed } from '@angular/core/testing';

import { CardFactoryService } from './card-factory.service';

describe('CardFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardFactoryService = TestBed.get(CardFactoryService);
    expect(service).toBeTruthy();
  });
});
