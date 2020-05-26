import { TestBed } from '@angular/core/testing';

import { ChatWsService } from './chat-ws.service';

describe('ChatWsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatWsService = TestBed.get(ChatWsService);
    expect(service).toBeTruthy();
  });
});
