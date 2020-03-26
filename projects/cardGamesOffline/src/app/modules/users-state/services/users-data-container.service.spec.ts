import { TestBed } from "@angular/core/testing";

import { UsersDataContainerService } from "./users-data-container.service";

describe("UsersDataContainerService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: UsersDataContainerService = TestBed.get(
      UsersDataContainerService
    );
    expect(service).toBeTruthy();
  });
});
