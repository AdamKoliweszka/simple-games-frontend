import { TestBed } from "@angular/core/testing";

import { OfflinePlayersDataContainerService } from "./offline-players-data-container.service";

describe("OfflinePlayersDataContainerService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: OfflinePlayersDataContainerService = TestBed.get(
      OfflinePlayersDataContainerService
    );
    expect(service).toBeTruthy();
  });
});
