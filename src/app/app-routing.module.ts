import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginSignupComponent} from './Template Style 1/login-signup/login-signup.component';
import {LoginComponent} from './Template Style 1/login-signup/login/login.component';
import {SignupComponent} from './Template Style 1/login-signup/signup/signup.component';
import {HomeComponent} from './Template Style 1/home/home.component';
import {DashboardComponent} from './Template Style 1/home/dashboard/dashboard.component';
import {SettingsComponent} from './Template Style 1/home/settings/settings.component';
import {EmptyPageComponent} from './Template Style 1/home/empty-page/empty-page.component';
import {UserListComponent} from './Template Style 1/home/settings/user-list/user-list.component';
import {UserDetailsComponent} from './Template Style 1/home/settings/user-details/user-details.component';

const routes: Routes = [
  {
    path: 'login-template-1', component: LoginSignupComponent,
    children: [{path: '', component: LoginComponent}]
  },
  {
    path: 'signup-template-1', component: LoginSignupComponent,
    children: [{path: '', component: SignupComponent}]
  },
  {
    path: 'dashboard-template-1', component: HomeComponent,
    children: [{path: '', component: DashboardComponent}]
  },
  {
    path: 'settings-template-1', component: HomeComponent,
    children: [{path: '', component: SettingsComponent}]
  },

  {
    path: '', component: HomeComponent,
    children: [
      {
        path: 'user-list', component: SettingsComponent,
        children: [{path: '', component: UserListComponent}]
      },
      {
        path: 'user-details', component: SettingsComponent,
        children: [{path: '', component: UserDetailsComponent}]
      },
    ],
  },

  {
    path: 'empty-template-1', component: HomeComponent,
    children: [{path: '', component: EmptyPageComponent}]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
