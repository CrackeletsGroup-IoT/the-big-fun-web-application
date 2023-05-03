import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyTicketsContentComponent } from './buy-tickets-content.component';

describe('BuyTicketsContentComponent', () => {
  let component: BuyTicketsContentComponent;
  let fixture: ComponentFixture<BuyTicketsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyTicketsContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyTicketsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
