import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfileContentComponent } from './update-profile-content.component';

describe('UpdateProfileContentComponent', () => {
  let component: UpdateProfileContentComponent;
  let fixture: ComponentFixture<UpdateProfileContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProfileContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProfileContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
