import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOfServiceFormComponent } from './user-of-service-form.component';

describe('UserOfServiceFormComponent', () => {
  let component: UserOfServiceFormComponent;
  let fixture: ComponentFixture<UserOfServiceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOfServiceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOfServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
