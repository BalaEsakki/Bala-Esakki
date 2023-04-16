import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserDeatilsComponent } from './user-deatils/user-deatils.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { SearchTrainsComponent } from './search-trains/search-trains.component';
import { BookingComponent } from './booking/booking.component';
import { TicketComponent } from './ticket/ticket.component';
import { SearchTrainComponent } from './search-train/search-train.component';
import { FindMyTrainComponent } from './find-my-train/find-my-train.component';
import { CheckingStatusComponent } from './checking-status/checking-status.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomeComponent,
    LoginPageComponent,
    UserDeatilsComponent,
    ForgetPasswordComponent,
    TopBarComponent,
    AboutComponent,
    ContactComponent,
    DemoComponent,
    AdminLoginComponent,
    AdminPageComponent,
    SearchTrainsComponent,
    BookingComponent,
    TicketComponent,
    SearchTrainComponent,
    FindMyTrainComponent,
    CheckingStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent],

})
export class AppModule { }
