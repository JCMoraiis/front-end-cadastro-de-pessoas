import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RegistrationScreenModule } from './registration-screen/registration-screen.module';
import { NavebarModule } from './navebar/navebar.module';
import { AppRoutingModule } from './app.routing.module';
import { UpdateScreenModule } from './update-screen/update-screen.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RegistrationScreenModule,
    UpdateScreenModule,
    NavebarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
