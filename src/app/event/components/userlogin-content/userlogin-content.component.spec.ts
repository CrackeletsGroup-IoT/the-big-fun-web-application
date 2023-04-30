import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserloginContentComponent } from './userlogin-content.component';

describe('UserloginContentComponent', () => {
  let component: UserloginContentComponent;
  let fixture: ComponentFixture<UserloginContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserloginContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserloginContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
