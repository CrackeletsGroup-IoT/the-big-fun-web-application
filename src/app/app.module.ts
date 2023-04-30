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
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    FooterContentComponent,
    NavComponent,
    MainContentComponent,
    UserregisterContentComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    ScrollingModule,
    MatInputModule,
    ReactiveFormsModule,



  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
