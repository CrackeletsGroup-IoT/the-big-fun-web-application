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


const routes:Routes=[
  { path: '', component: UserloginContentComponent },
  { path: 'home', component: HomeContentComponent },
  { path: 'aboutUs', component: AboutusContentComponent },
  { path: 'events', component: ViewEventsContentComponent },
  { path: 'signUp', component: UserregisterContentComponent },
  { path: 'eventRegister', component: RegistereventComponentComponent },
  { path: 'faqs', component: FaqContentComponent },
  {path: 'signIn', component: UserloginContentComponent},
  {path: 'userProfile', component: UserProfileContentComponent},
  {path: 'updateProfile', component: UpdateProfileContentComponent},
  { path: 'eventDetail/:index', component: EventdetailsComponentComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

