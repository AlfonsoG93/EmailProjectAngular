import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { PhoneApiService } from './services/phone-api.service';
import { UserApiService } from './services/user-api.service';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { JoinPageComponent } from './join-page/join-page.component';
import { LoginComponent } from './join-page/login/login.component';
import { SignupComponent } from './join-page/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundComponent,
    PhoneListComponent,
    PhoneDetailsComponent,
    JoinPageComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PhoneApiService,
    UserApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
