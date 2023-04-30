import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-content',
  templateUrl: './faq-content.component.html',
  styleUrls: ['./faq-content.component.css']
})
export class FaqContentComponent {
  faqs=[
    {
      id:"1",
      question:"¿Cómo puedo suscribirme a la aplicación?",
      answer:"R: Para suscribirte a nuestra aplicación, simplemente debes crear una cuenta en nuestro sitio web y completar el formulario de registro."
    },
    {
      id:"2",
      question:"¿Cómo puedo saber si hay disponibilidad de entradas para un evento?",
      answer:"R: Si no hay entradas en un evento este se marcará como SOlD OUT en la información del evento y no te dejará realizar la compra."

    },
    {
      id:"3",
      question:"¿Cómo puedo encontrar eventos en mi ciudad?",
      answer:"R: Puedes buscar eventos por ubicación en nuestra aplicación. Solo ingresa al apartado del mapa y podrás visualizar los eventos cercanos a tu ubicación"
    }
  ]
}
