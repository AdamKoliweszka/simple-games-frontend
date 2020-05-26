import { TestBed } from '@angular/core/testing';

import { ChatDataContainerService } from './chat-data-container.service';

describe('ChatDataContainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatDataContainerService = TestBed.get(ChatDataContainerService);
    expect(service).toBeTruthy();
  });
});
