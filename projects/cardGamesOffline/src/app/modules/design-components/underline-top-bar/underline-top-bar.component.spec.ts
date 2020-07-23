import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderlineTopBarComponent } from './underline-top-bar.component';

describe('UnderlineTopBarComponent', () => {
  let component: UnderlineTopBarComponent;
  let fixture: ComponentFixture<UnderlineTopBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnderlineTopBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderlineTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
