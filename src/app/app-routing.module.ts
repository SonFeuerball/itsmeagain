import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeftrightComponent } from './domain-components/leftright/leftright.component';
import { AnimalsComponent } from './domain-components/animals/animals.component';

const routes: Routes = [
  { path: 'leftright', component: LeftrightComponent },
  { path: 'animals', component: AnimalsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
