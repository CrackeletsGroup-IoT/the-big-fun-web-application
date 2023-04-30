import { Component } from '@angular/core';

@Component({
  selector: 'app-paymentconfirmation-content',
  templateUrl: './paymentconfirmation-content.component.html',
  styleUrls: ['./paymentconfirmation-content.component.css']
})
export class PaymentconfirmationContentComponent {
  eventImg= "https://www.anayainfantilyjuvenil.com/images/libros/grande/9788469833728-la-vida-es-sueno-clasicos-hispanicos.jpg"
  eventQr= "https://www.qr-generator.nu/qrcode.svg"
  dataSource=[
    {date: "25/04/2023",hour:"8:00pm", nameEvent:"Obra teatral 'La vida es un sueño'", qTikects: "2", qrCode:"https://www.qr-generator.nu/qrcode.svg"}
  ]
  displayedColumns: string[] = ['Fecha', 'Hora', 'Nombre', 'Tickets', 'QR'];

}
