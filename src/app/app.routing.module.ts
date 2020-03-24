import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { RegistrationFormComponent } from './registration-screen/registration-form/registration-form.component';

const appRoutes: Routes = [
  { path: '', component: RegistrationFormComponent },
  { path: 'cadastrar', component: RegistrationFormComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
