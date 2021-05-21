import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';



var firebaseConfig = {
   apiKey: "AIzaSyAgiujc0UDd4MentSf2GC6A1Hm0C_N1H0A",
    authDomain: "ipttask3-6b103.firebaseapp.com",
    projectId: "ipttask3-6b103",
    storageBucket: "ipttask3-6b103.appspot.com",
    messagingSenderId: "608102750771",
    appId: "1:608102750771:web:b499d78aa9494a6943e146",
    measurementId: "G-R0SWM92GV9"
  };

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
