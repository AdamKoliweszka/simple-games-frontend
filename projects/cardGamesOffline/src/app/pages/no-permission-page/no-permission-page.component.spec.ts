import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPermissionPageComponent } from './no-permission-page.component';

describe('NoPermissionPageComponent', () => {
  let component: NoPermissionPageComponent;
  let fixture: ComponentFixture<NoPermissionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoPermissionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoPermissionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
