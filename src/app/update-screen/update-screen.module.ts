import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { UpdateFormComponent } from './update-form/update-form.component';
import { FormComponentsModule } from '../form-components/form-components.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    UpdateFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    FormComponentsModule,
    MatButtonModule
  ],
  exports: [
    UpdateFormComponent
  ],
})
export class UpdateScreenModule { }
