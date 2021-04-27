import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSignupComponent } from './Template Style 1/login-signup/login-signup.component';
import {LoginComponent} from './Template Style 1/login-signup/login/login.component';
import {SignupComponent} from './Template Style 1/login-signup/signup/signup.component';
import { HomeComponent } from './Template Style 1/home/home.component';
import { DashboardComponent } from './Template Style 1/home/dashboard/dashboard.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgApexchartsModule} from 'ng-apexcharts';
import {ReactiveFormsModule} from '@angular/forms';
import { SettingsComponent } from './Template Style 1/home/settings/settings.component';
import { EmptyPageComponent } from './Template Style 1/home/empty-page/empty-page.component';
import {ToastrModule} from 'ngx-toastr';
import { UserListComponent } from './Template Style 1/home/settings/user-list/user-list.component';
import { UserDetailsComponent } from './Template Style 1/home/settings/user-details/user-details.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent,
    SettingsComponent,
    EmptyPageComponent,
    UserListComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
