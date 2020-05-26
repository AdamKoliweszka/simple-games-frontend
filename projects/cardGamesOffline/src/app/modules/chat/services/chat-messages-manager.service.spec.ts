import { TestBed } from '@angular/core/testing';

import { ChatMessagesManagerService } from './chat-messages-manager.service';

describe('ChatMessagesManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatMessagesManagerService = TestBed.get(ChatMessagesManagerService);
    expect(service).toBeTruthy();
  });
});
