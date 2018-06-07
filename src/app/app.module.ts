import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import{routes} from './app.router';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ImagesliderComponent } from './imageslider/imageslider.component';
import { ServicesBarComponent } from './services-bar/services-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SettingsComponent } from './settings/settings.component';
import { DetailAboutUsComponent } from './detail-about-us/detail-about-us.component';

import { ElectricsComponent } from './electrics/electrics.component';
import { PaintComponent } from './paint/paint.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { PlumberComponent } from './plumber/plumber.component';
import { GasComponent } from './gas/gas.component';
import { SecurityComponent } from './security/security.component';
import { RoofComponent } from './roof/roof.component';
import { HandymanComponent } from './handyman/handyman.component';
import { LockComponent } from './lock/lock.component';

import { OthersComponent } from './others/others.component';

import { ServComponent } from './serv/serv.component';
import { FrgtPaswrdComponent } from './frgt-paswrd/frgt-paswrd.component';
import { RenewPassComponent } from './renew-pass/renew-pass.component';
import { MainPagaContentComponent } from './main-paga-content/main-paga-content.component';
import { AboutComponent } from './about/about.component';
import { CarpenterComponent } from './carpenter/carpenter.component';
import { AlarmComponent } from './alarm/alarm.component';
import { CleanComponent } from './clean/clean.component';
import { CreateGigComponent } from './create-gig/create-gig.component';
import {HttpClientModule} from '@angular/common/http';
const appRoutes : Routes=[
  
  {path:'home' , component:SiteLayoutComponent },
  {path:'detailAboutUs' , component:DetailAboutUsComponent },
  {path:'profile', component : ProfileComponent},
  {path:'login', component: LoginComponent},
  {path:'forgotpassword',component:FrgtPaswrdComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'create_gig',component:CreateGigComponent},
  {path:'settings',component:SettingsComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',redirectTo:'/home',pathMatch:'full'},
  
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    ImagesliderComponent,
    ServicesBarComponent,
    ProfileComponent,
    SiteLayoutComponent,
    DashboardComponent,
    CreateGigComponent,
    SettingsComponent,
    DetailAboutUsComponent,
    ConfirmEqualValidatorDirective,
    MainPagaContentComponent,
    CarpenterComponent,
    ElectricsComponent,
    PaintComponent,
    MaintenanceComponent,
    PlumberComponent,
    GasComponent,
    SecurityComponent,
    RoofComponent,
    HandymanComponent,
    LockComponent,
    AlarmComponent,
    OthersComponent,
    CleanComponent,
    ServComponent,
    FrgtPaswrdComponent,
    RenewPassComponent,
    AboutComponent,
 ],
  imports: [
    
    FormsModule,
    HttpModule,
    BrowserModule,
    routes,
    HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }