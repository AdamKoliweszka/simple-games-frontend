import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { OfflinePlayersFormComponent } from "./offline-players-form.component";

describe("OfflinePlayersFormComponent", () => {
  let component: OfflinePlayersFormComponent;
  let fixture: ComponentFixture<OfflinePlayersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OfflinePlayersFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflinePlayersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
