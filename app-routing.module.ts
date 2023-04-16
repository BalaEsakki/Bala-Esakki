import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AuthGuardService } from './auth-guard.service';
import { BookingComponent } from './booking/booking.component';
import { CheckingStatusComponent } from './checking-status/checking-status.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { FindMyTrainComponent } from './find-my-train/find-my-train.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SearchTrainComponent } from './search-train/search-train.component';
import { SearchTrainsComponent } from './search-trains/search-trains.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserDeatilsComponent } from './user-deatils/user-deatils.component';

const routes: Routes = [

  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: 'loginPage',
    component: LoginPageComponent,
  },
  {
    path: 'signUp',
    component: SignUpComponent,
  },
  {
    path: 'UserDeatils',
    component: UserDeatilsComponent,
    // canActivate: [AuthGuardService]
  },
  {
    path: 'forgetPassword',
    component: ForgetPasswordComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'adminLogin',
    component: AdminLoginComponent,
    // canActivate: [AuthGuardService]
  },
  {
    path: 'adminPage',
    component: AdminPageComponent,
    // canActivate: [AuthGuardService]
  },
  {
    path: 'searchTrains',
    component: SearchTrainsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'searchTrain',
    component: SearchTrainComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'booking',
    component: BookingComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'findMyTrain',
    component: FindMyTrainComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'checkingStatus',
    component: CheckingStatusComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'demo',
    component: DemoComponent,
    canActivate: [AuthGuardService]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
