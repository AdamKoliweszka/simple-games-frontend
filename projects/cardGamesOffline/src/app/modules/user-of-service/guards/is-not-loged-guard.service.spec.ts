import { TestBed } from "@angular/core/testing";

import { IsNotLogedGuardService } from "./is-not-loged-guard.service";

describe("IsNotLogedGuardService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: IsNotLogedGuardService = TestBed.get(IsNotLogedGuardService);
    expect(service).toBeTruthy();
  });
});
