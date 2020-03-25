import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { RegistrationFormComponent } from './registration-screen/registration-form/registration-form.component';
import { UpdateFormComponent } from './update-screen/update-form/update-form.component';
import { ConsultFormComponent } from './consult-screen/consult-form/consult-form.component';

const appRoutes: Routes = [
  { path: '', component: RegistrationFormComponent },
  { path: 'cadastrar', component: RegistrationFormComponent },
  { path: 'consultar', component: ConsultFormComponent },
  { path: 'atualizar', component: UpdateFormComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
