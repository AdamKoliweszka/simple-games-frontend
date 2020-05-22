import { TestBed } from "@angular/core/testing";

import { OfflinePlayersLoadRouteGuardService } from "./offline-players-load-route-guard.service";

describe("OfflinePlayersLoadRouteGuardService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: OfflinePlayersLoadRouteGuardService = TestBed.get(
      OfflinePlayersLoadRouteGuardService
    );
    expect(service).toBeTruthy();
  });
});
