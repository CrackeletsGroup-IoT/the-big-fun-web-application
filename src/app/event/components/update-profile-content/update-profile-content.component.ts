import { Component } from '@angular/core';


@Component({
  selector: 'app-update-profile-content',
  templateUrl: './update-profile-content.component.html',
  styleUrls: ['./update-profile-content.component.css']
})

export class UpdateProfileContentComponent {
  userData = {
    username: "kane",
    fullname: "kevin Oliva Alva",
    email: "kevin.oliva.alva@gmail.com",
    phone: "999563680",
    dni: "73089923"
  };
  updateData() {
    // Lógica para guardar los datos en el backend o en algún servicio de almacenamiento
    console.log('Datos guardados: ', this.userData);
  }
}
