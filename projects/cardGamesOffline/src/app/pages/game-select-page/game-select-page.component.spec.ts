import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSelectPageComponent } from './game-select-page.component';

describe('GameSelectPageComponent', () => {
  let component: GameSelectPageComponent;
  let fixture: ComponentFixture<GameSelectPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameSelectPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSelectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
