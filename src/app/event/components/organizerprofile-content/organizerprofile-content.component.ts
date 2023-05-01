import { Component } from '@angular/core';

@Component({
  selector: 'app-organizerprofile-content',
  templateUrl: './organizerprofile-content.component.html',
  styleUrls: ['./organizerprofile-content.component.css']
})
export class OrganizerprofileContentComponent {

  list_organizer =
    {
      "organizer":
        {
          organizerimage: "assets/organizer.png",
          username: " LuisLuisama",
          fullname: " Luis Andres Sanchez Luisama",
          email: " luis.sanchez.luisama@gmail.com",
          phone: " 999563680",
          dni: " 73089923",
          namecompany: " Stoza",
          ruc:" 20 50364496 8",
          adresscompany:" Calle José Ortega y Gasset, 40 - loc.",
        }
    };

}
