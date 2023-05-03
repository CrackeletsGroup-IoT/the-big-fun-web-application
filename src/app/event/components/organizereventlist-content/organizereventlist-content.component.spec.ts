import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizereventlistContentComponent } from './organizereventlist-content.component';

describe('OrganizereventlistContentComponent', () => {
  let component: OrganizereventlistContentComponent;
  let fixture: ComponentFixture<OrganizereventlistContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizereventlistContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizereventlistContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
