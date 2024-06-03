import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StripePaymentService} from "../../services/stripe-payment.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-buy-tickets-content',
  templateUrl: './buy-tickets-content.component.html',
  styleUrls: ['./buy-tickets-content.component.css']
})
export class BuyTicketsContentComponent implements OnInit{

  constructor( private snackbar:MatSnackBar,private route:ActivatedRoute,private fb: FormBuilder, private stripeService: StripePaymentService,private router:Router) {

    this.route.queryParams.subscribe(params=>{

      this.eventId=params['eventId'];
      this.attendeeId=params['attendeeId'];
      this.amount=params['amount'];

    })

    //para el pago
    this.paymentForm = this.fb.group({
      cardNumber: ['', Validators.required],
      expMonth: ['', Validators.required],
      expYear: ['', Validators.required],
      cvc: ['', Validators.required],
      username: [localStorage.getItem("username"), Validators.required]
    })

    this.chargeForm = this.fb.group({
      stripeToken: ['', Validators.required],
      username: [localStorage.getItem("username"), Validators.required],
      amount: [this.amount, Validators.required]
    });

  }

  eventId:any;
  attendeeId:any;
  amount:any;

  //para el pago
  paymentForm: FormGroup;
  chargeForm: FormGroup;
  token: string | null = null;

  ngOnInit(): void {

  }

  createToken() {
    this.stripeService.createCardToken(this.paymentForm.value).subscribe(
      (response) => {
        this.snackbar.open("Su token de compra se creo exitosamente", "", {verticalPosition:'top'})
        this.token = response.token;
        this.chargeForm.patchValue({ stripeToken: this.token });
      },
      (error) => {
        console.error('Error creating token:', error);
      }
    );
  }

  charge() {
    this.stripeService.charge(this.chargeForm.value).subscribe(
      (response) => {
        this.snackbar.open("Su compra se realizó exitosamente", "", {verticalPosition:'top'})



        //redirigir a la confirmacion depago
        const params={
          eventId:this.eventId,
          attendeeId:this.attendeeId,
        }
        this.router.navigate(['paymentConfirmation'], {queryParams:params});
      },
      (error) => {
        console.error('Error during charge:', error);
      }
    );
  }

}








