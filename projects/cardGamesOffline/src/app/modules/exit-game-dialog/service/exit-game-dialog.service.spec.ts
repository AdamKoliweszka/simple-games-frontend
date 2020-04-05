import { TestBed } from '@angular/core/testing';

import { ExitGameDialogService } from './exit-game-dialog.service';

describe('ExitGameDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExitGameDialogService = TestBed.get(ExitGameDialogService);
    expect(service).toBeTruthy();
  });
});
