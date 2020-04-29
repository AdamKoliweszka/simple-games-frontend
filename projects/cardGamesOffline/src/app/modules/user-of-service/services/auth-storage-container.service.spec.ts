import { TestBed } from "@angular/core/testing";

import { AuthStorageContainerService } from "./auth-storage-container.service";

describe("AuthStorageContainerService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: AuthStorageContainerService = TestBed.get(
      AuthStorageContainerService
    );
    expect(service).toBeTruthy();
  });
});
