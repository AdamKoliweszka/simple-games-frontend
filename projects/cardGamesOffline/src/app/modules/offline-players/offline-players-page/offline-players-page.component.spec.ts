import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflinePlayersPageComponent } from './offline-players-page.component';

describe('OfflinePlayersPageComponent', () => {
  let component: OfflinePlayersPageComponent;
  let fixture: ComponentFixture<OfflinePlayersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflinePlayersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflinePlayersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
