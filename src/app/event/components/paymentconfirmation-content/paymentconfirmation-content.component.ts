import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EventsService} from "../../services/events.service";
import {PaymentService} from "../../services/payment.service";
import {v4 as uuidv4} from "uuid";
import {DomSanitizer} from "@angular/platform-browser";
import {EventAtendeeService} from "../../services/event-atendee.service";

@Component({
  selector: 'app-paymentconfirmation-content',
  templateUrl: './paymentconfirmation-content.component.html',
  styleUrls: ['./paymentconfirmation-content.component.css']
})
export class PaymentconfirmationContentComponent implements OnInit{

  eventId:any;
  attendeeId:any;
  events:any;
  currentEvent:any;

  eventImg:any;
  dataSource: any;
  displayedColumns: any;

  qr: any; //es un arreglo de bytes
  uuid:any;
  paymentId:any;

  //para el simbolo de cargando
  loading=true;

  eventAttendeeId:any;

  constructor(private route:ActivatedRoute,private eventService:EventsService, private paymentService:PaymentService, private sanitizer:DomSanitizer, private eventAttendeeService:EventAtendeeService) {

  }

  getAllEvents() {
    this.eventService.getAll().subscribe((response: any) => {
      if (Array.isArray(response.content)) {
        this.events = response.content;
        this.findById();
        console.log(this.events);
      } else {
        console.error('Invalid response format: events array not found');
      }
    });
  }

  findById(){
    this.currentEvent = this.events.find((event:any)=>event.id==this.eventId);
    console.log("evento: " + this.currentEvent);

    this.eventImg= this.currentEvent.imageUrl;   //trae laimagen del back
    this.dataSource=[
      {date: this.currentEvent.date,hour:this.currentEvent.hour, nameEvent:this.currentEvent.name,address:this.currentEvent.address}
    ]

  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params=>{
      this.eventId=params['eventId'];
      this.attendeeId=params['attendeeId'];
    });

    this.getAllEvents();

    this.displayedColumns = ['Fecha', 'Nombre'];

    //una vez cargada la informacion, añade el atennde como parte dle evento
    this.eventAttendeeService.createEventAttendee(this.eventId, this.attendeeId).subscribe( value => {
      this.eventAttendeeId=value.id;
      console.log("event-atendeee: " + value);

      this.createQr();

    });
  }

  createQr() {

    const body= uuidv4();

    //gaurdanmos el uui en una variable global
    this.uuid=body;

    this.paymentService.createQr(body).subscribe({
        next: (qrBlob) => { // @ts-ignore
          this.qr = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(qrBlob));

          this.createPayment(qrBlob);  //si existe el qr, postea el pago
        }
        , error: (error) => {
          console.error(error);
        }
      }
    );
  }

  //todo: crear el post payment -> recibe fecha del pago (generar en el front)
  //                               guardar qr en url
  //
  createPayment(qrBlob:any){

    const body={
      date: new Date(), //obtener la fecha de ahora
      uuid: this.uuid,
      qrImg:"",
    }

    //obtiene el id de un pago
    this.paymentService.createPayment(body, this.eventAttendeeId).subscribe(response=>{
      this.paymentId=response.id;

      this.addFileQR(qrBlob);
    });

  }

  //todo: funcion para tener el link del qr
  addFileQR(myQR:any){

    this.paymentService.uploadQR(myQR, this.paymentId);

    //el loading se detiene
    this.loading=false;
  }

  //todo: crear metodo de relacion event-atendee




}

