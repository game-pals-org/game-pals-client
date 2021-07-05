import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddAnnouncementComponent } from './components/add-announcement/add-announcement.component';
import { HttpClientModule } from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {LogInComponent} from "./components/log-in/log-in.component";
import {SignInComponent} from "./components/sign-in/sign-in.component";
import { UserProfileComponent } from './components/user-profile/user-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    AddAnnouncementComponent,
    LogInComponent,
    SignInComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
