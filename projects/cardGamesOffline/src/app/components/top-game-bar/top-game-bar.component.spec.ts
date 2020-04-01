import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGameBarComponent } from './top-game-bar.component';

describe('TopGameBarComponent', () => {
  let component: TopGameBarComponent;
  let fixture: ComponentFixture<TopGameBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopGameBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopGameBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
