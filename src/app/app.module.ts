import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDesignModule} from './Modules/mat-design/mat-design.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './Components/root/app.component';
import { AuthComponent } from './Components/auth/auth.component';
import { PhoneBookComponent } from './Components/phone-book/phone-book.component';
import { ContactComponent } from './Components/contact/contact.component';
import {HttpService} from './Servises/http.service';
import {DataExchangeService} from './Servises/data-exchange.service';
import {UtilService} from './Servises/util.service';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    PhoneBookComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, NoopAnimationsModule,
    MatCheckboxModule, HttpClientModule, MatDesignModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [HttpService, DataExchangeService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
