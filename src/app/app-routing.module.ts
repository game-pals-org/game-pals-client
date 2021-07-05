import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {HomeComponent} from "./components/home/home.component";
import {AddAnnouncementComponent} from "./components/add-announcement/add-announcement.component";
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {LogInComponent} from "./components/log-in/log-in.component";
import {UserProfileComponent} from "./components/user-profile/user-profile.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'add-announcement',
    component: AddAnnouncementComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'log-in',
    component: LogInComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
