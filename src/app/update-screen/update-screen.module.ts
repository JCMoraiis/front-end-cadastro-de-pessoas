import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE, MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';

import { UpdateFormComponent } from './update-form/update-form.component';
import { RegistrationScreenModule } from '../registration-screen/registration-screen.module';

@NgModule({
  declarations: [
    UpdateFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RegistrationScreenModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  exports: [
    UpdateFormComponent
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt'},
  ],
})
export class UpdateScreenModule { }
