import { NgModule } from '@angular/core';
import { ConsultFormComponent } from './consult-form/consult-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponentsModule } from '../form-components/form-components.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ConsultFormComponent
  ],
  imports: [
    BrowserModule,
    FormComponentsModule,
    MatButtonModule
  ],
  exports: [
    ConsultFormComponent
  ]
})
export class ConsultScreenModule { }
