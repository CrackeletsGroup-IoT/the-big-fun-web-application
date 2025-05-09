import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeBuyersComponentComponent } from './see-buyers-component.component';

describe('SeeBuyersComponentComponent', () => {
  let component: SeeBuyersComponentComponent;
  let fixture: ComponentFixture<SeeBuyersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeBuyersComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeBuyersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
