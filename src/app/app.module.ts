import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';



var firebaseConfig = {
    apiKey: "AIzaSyA9L7DB1pnmyTlcA_SdVM_XaYQ7azQhU3s",
    authDomain: "ipttask3.firebaseapp.com",
    projectId: "ipttask3",
    storageBucket: "ipttask3.appspot.com",
    messagingSenderId: "374972791928",
    appId: "1:374972791928:web:01085e90390f3591f3818d",
    measurementId: "G-SVEM63NDV8"
  };

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
