import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { NameComponent } from '../form-components/name/name.component';
import { CpfComponent } from '../form-components/cpf/cpf.component';
import { GendersComponent } from '../form-components/genders/genders.component';
import { DateOfBirthComponent } from '../form-components/date-of-birth/date-of-birth.component';
import { EmailComponent } from '../form-components/email/email.component';
import { NaturalnessComponent } from '../form-components/naturalness/naturalness.component';
import { NationalityComponent } from '../form-components/nationality/nationality.component';

@NgModule({
  declarations: [
    RegistrationFormComponent,
    NameComponent,
    CpfComponent,
    GendersComponent,
    DateOfBirthComponent,
    EmailComponent,
    NaturalnessComponent,
    NationalityComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  exports: [
    RegistrationFormComponent,
    NameComponent,
    CpfComponent,
    GendersComponent,
    DateOfBirthComponent,
    EmailComponent,
    NaturalnessComponent,
    NationalityComponent
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt'},
  ],
})
export class RegistrationScreenModule { }
