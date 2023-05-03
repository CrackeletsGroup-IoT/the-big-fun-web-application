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
      question:"¿How can I subscribe to the application?",
      answer:"A: To subscribe to our application, simply create an account on our website and complete the registration form."
    },
    {
      id:"2",
      question:"How can I find out if tickets are available for an event?",
      answer:"A: If there are no tickets for an event it will be marked as SOlD OUT in the event information and will not allow you to make the purchase."

    },
    {
      id:"3",
      question:"How can I find events in my city?",
      answer:"A: You can search for events by location in our application. Just go to the map section and you will be able to visualize the events near your location."
    }
  ]
}
