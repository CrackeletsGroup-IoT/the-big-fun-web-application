import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistereventComponentComponent } from './registerevent-component.component';

describe('RegistereventComponentComponent', () => {
  let component: RegistereventComponentComponent;
  let fixture: ComponentFixture<RegistereventComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistereventComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistereventComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
