import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { NavebarComponent } from './navebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavebarComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    NavebarComponent
  ]
})
export class NavebarModule { }
