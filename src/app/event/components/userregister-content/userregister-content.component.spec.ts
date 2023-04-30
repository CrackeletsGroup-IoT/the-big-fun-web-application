import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserregisterContentComponent } from './userregister-content.component';

describe('UserregisterContentComponent', () => {
  let component: UserregisterContentComponent;
  let fixture: ComponentFixture<UserregisterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserregisterContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserregisterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
