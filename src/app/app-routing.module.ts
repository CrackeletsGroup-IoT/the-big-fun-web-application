import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeContentComponent} from "./event/components/home-content/home-content.component";
import {AboutusContentComponent} from "./event/components/aboutus-content/aboutus-content.component";
import {ViewEventsContentComponent} from "./event/components/view-events-content/view-events-content.component";
import {UserregisterContentComponent} from "./event/components/userregister-content/userregister-content.component";
import {
  RegistereventComponentComponent
} from "./event/components/registerevent-component/registerevent-component.component";
import {FaqContentComponent} from "./event/components/faq-content/faq-content.component";
import {
  EventdetailsComponentComponent
} from "./event/components/eventdetails-component/eventdetails-component.component";
import {UserloginContentComponent} from "./event/components/userlogin-content/userlogin-content.component";
import {UserProfileContentComponent} from "./event/components/user-profile-content/user-profile-content.component";
import {
  UpdateProfileContentComponent
} from "./event/components/update-profile-content/update-profile-content.component";
import {AuthGuard} from "./event/services/auth.guard.service";
import {NoAuthGuard} from "./event/services/no-auth.guard.service";

import {BuyTicketsContentComponent} from "./event/components/buy-tickets-content/buy-tickets-content.component";
import {PaymentconfirmationContentComponent} from "./event/components/paymentconfirmation-content/paymentconfirmation-content.component";

const routes:Routes=[
  { path: '', redirectTo: '/home', pathMatch:'full' },
  { path: 'home', component: HomeContentComponent, canActivate:[AuthGuard], data:{requiresAuth:true} },
  { path: 'aboutUs', component: AboutusContentComponent },
  { path: 'events', component: ViewEventsContentComponent , canActivate:[AuthGuard], data:{requiresAuth:true}},
  { path: 'signUp', component: UserregisterContentComponent, canActivate:[NoAuthGuard]},
  { path: 'eventRegister', component: RegistereventComponentComponent , canActivate:[AuthGuard], data:{requiresAuth:true}},
  { path: 'faqs', component: FaqContentComponent },
  {path: 'signIn', component: UserloginContentComponent , canActivate:[NoAuthGuard]},
  {path: 'userProfile', component: UserProfileContentComponent, canActivate:[AuthGuard], data:{requiresAuth:true}},
  {path: 'updateProfile', component: UpdateProfileContentComponent, canActivate:[AuthGuard], data:{requiresAuth:true}},
  { path: 'eventDetail/:index', component: EventdetailsComponentComponent , canActivate:[AuthGuard], data:{requiresAuth:true}},
  { path: 'buyTickets', component: BuyTicketsContentComponent , canActivate:[AuthGuard], data:{requiresAuth:true}},
  { path: 'paymentConfirmation', component: PaymentconfirmationContentComponent , canActivate:[AuthGuard], data:{requiresAuth:true}},

];

//AuthGuard->usuario debe estar logueado
//NoAuthGuard -> usuario puede no estar autenticado

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }


/////////////////
//METODO PARA SABER SI EL USUARIO ESTA REGISTRADO




