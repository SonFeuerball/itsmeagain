import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimalsComponent } from './domain-components/animals/animals.component';
import { LeftrightComponent } from './domain-components/leftright/leftright.component';
import { NothinghereComponent } from './domain-components/nothinghere/nothinghere.component';

const routes: Routes = [
  { path: 'animals', component: AnimalsComponent },
  { path: 'leftright', component: LeftrightComponent },
  { path: '', redirectTo: 'animals', pathMatch: 'full' },
  { path: '**', component: NothinghereComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
