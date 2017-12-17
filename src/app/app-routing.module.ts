import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { JoinPageComponent } from './join-page/join-page.component';

const routes: Routes = [
  { path: "",           component : HomePageComponent },
  { path: "phones",     component : PhoneListComponent },
  { path: "phones/:id", component : PhoneDetailsComponent },
  { path: "join",       component : JoinPageComponent},

  { path: "**",         component : NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
