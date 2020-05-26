import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMessageOutputComponent } from './chat-message-output.component';

describe('ChatMessageOutputComponent', () => {
  let component: ChatMessageOutputComponent;
  let fixture: ComponentFixture<ChatMessageOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatMessageOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatMessageOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
