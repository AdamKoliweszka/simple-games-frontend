import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesStartPageComponent } from './messages-start-page.component';

describe('MessagesStartPageComponent', () => {
  let component: MessagesStartPageComponent;
  let fixture: ComponentFixture<MessagesStartPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesStartPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesStartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
