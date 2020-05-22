import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOfServicePageComponent } from './user-of-service-page.component';

describe('UserOfServicePageComponent', () => {
  let component: UserOfServicePageComponent;
  let fixture: ComponentFixture<UserOfServicePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOfServicePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOfServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
