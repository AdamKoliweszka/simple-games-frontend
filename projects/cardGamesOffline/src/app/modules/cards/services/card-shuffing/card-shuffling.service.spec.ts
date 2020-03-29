import { TestBed } from "@angular/core/testing";

import { CardShufflingService } from "./card-shuffling.service";

describe("CardShufflingService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: CardShufflingService = TestBed.get(CardShufflingService);
    expect(service).toBeTruthy();
  });
});
