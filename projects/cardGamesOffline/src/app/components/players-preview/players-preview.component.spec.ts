import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PlayersPreviewComponent } from "./players-preview.component";

describe("PlayersPreviewComponent", () => {
  let component: PlayersPreviewComponent;
  let fixture: ComponentFixture<PlayersPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlayersPreviewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
