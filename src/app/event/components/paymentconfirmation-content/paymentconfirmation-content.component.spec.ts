import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentconfirmationContentComponent } from './paymentconfirmation-content.component';

describe('PaymentconfirmationContentComponent', () => {
  let component: PaymentconfirmationContentComponent;
  let fixture: ComponentFixture<PaymentconfirmationContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentconfirmationContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentconfirmationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
