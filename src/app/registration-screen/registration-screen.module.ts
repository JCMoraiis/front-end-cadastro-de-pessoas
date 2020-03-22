import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { RegistrationFormComponent } from './registration-form/registration-form.component';

@NgModule({
  declarations: [
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ],
  exports: [
    RegistrationFormComponent
  ]
})
export class RegistrationScreenModule { }
