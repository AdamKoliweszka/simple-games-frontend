import { TestBed } from '@angular/core/testing';

import { SnackbarDataContainerService } from './snackbar-data-container.service';

describe('SnackbarDataContainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SnackbarDataContainerService = TestBed.get(SnackbarDataContainerService);
    expect(service).toBeTruthy();
  });
});
