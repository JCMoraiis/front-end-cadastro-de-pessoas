import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RemoveFormComponent } from './remove-form/remove-form.component';
import { FormComponentsModule } from '../form-components/form-components.module';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RemoveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormComponentsModule,
    MatButtonModule
  ],
  exports: [
    RemoveFormComponent
  ]
})
export class RemoveScreenModule { }
