import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWarComponent } from './card-war.component';

describe('CardWarComponent', () => {
  let component: CardWarComponent;
  let fixture: ComponentFixture<CardWarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardWarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
