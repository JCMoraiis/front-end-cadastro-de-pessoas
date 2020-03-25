import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { FormComponentsModule } from '../form-components/form-components.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    FormComponentsModule,
    MatButtonModule
  ],
  exports: [
    RegistrationFormComponent
  ],
})
export class RegistrationScreenModule { }
