import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterContentComponent } from './event/components/footer-content/footer-content.component';
import { NavComponent } from './event/components/nav/nav.component';
import { MainContentComponent } from './event/components/main-content/main-content.component';
import { UserregisterContentComponent } from './event/components/userregister-content/userregister-content.component';

import {HttpClientModule} from "@angular/common/http";
import {LayoutModule} from "@angular/cdk/layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDividerModule} from "@angular/material/divider";
import {HomeContentComponent} from "./event/components/home-content/home-content.component";
import {AboutusContentComponent} from "./event/components/aboutus-content/aboutus-content.component";
import {
  AttendancelistComponentComponent
} from "./event/components/attendancelist-component/attendancelist-component.component";
import {BuyTicketsContentComponent} from "./event/components/buy-tickets-content/buy-tickets-content.component";
import {
  EventdetailsComponentComponent
} from "./event/components/eventdetails-component/eventdetails-component.component";
import {FaqContentComponent} from "./event/components/faq-content/faq-content.component";
import {
  OrganizereventlistContentComponent
} from "./event/components/organizereventlist-content/organizereventlist-content.component";
import {
  OrganizerprofileContentComponent
} from "./event/components/organizerprofile-content/organizerprofile-content.component";
import {
  PaymentconfirmationContentComponent
} from "./event/components/paymentconfirmation-content/paymentconfirmation-content.component";
import {
  RegistereventComponentComponent
} from "./event/components/registerevent-component/registerevent-component.component";
import {
  UpdateProfileContentComponent
} from "./event/components/update-profile-content/update-profile-content.component";
import {UserloginContentComponent} from "./event/components/userlogin-content/userlogin-content.component";
import {ViewEventsContentComponent} from "./event/components/view-events-content/view-events-content.component";
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import { NavbarAttendeeComponent } from './event/components/navbar-attendee/navbar-attendee.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterContentComponent,
    NavComponent,
    MainContentComponent,
    UserregisterContentComponent,
    HomeContentComponent,
    AboutusContentComponent,
    AttendancelistComponentComponent,
    BuyTicketsContentComponent,
    EventdetailsComponentComponent,
    FaqContentComponent,
    MainContentComponent,
    OrganizereventlistContentComponent,
    OrganizerprofileContentComponent,
    PaymentconfirmationContentComponent,
    RegistereventComponentComponent,
    UpdateProfileContentComponent,
    UserloginContentComponent,
    UserregisterContentComponent,
    ViewEventsContentComponent,
    NavbarAttendeeComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    HttpClientModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    ScrollingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatGridListModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatDividerModule,
    AppRoutingModule,
    RouterModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
