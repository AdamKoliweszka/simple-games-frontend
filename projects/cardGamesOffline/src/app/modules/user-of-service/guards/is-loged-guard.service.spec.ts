import { TestBed } from "@angular/core/testing";

import { IsLogedGuardService } from "./is-loged-guard.service";

describe("IsLogedGuardService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: IsLogedGuardService = TestBed.get(IsLogedGuardService);
    expect(service).toBeTruthy();
  });
});
