import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { NavebarComponent } from './navebar.component';

@NgModule({
  declarations: [
    NavebarComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    NavebarComponent
  ]
})
export class NavebarModule { }
