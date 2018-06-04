import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import{routes} from './app.router';



import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ImagesliderComponent } from './imageslider/imageslider.component';
import { ServicesBarComponent } from './services-bar/services-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateGigComponent } from './create-gig/create-gig.component';
import { SettingsComponent } from './settings/settings.component';
import { DetailAboutUsComponent } from './detail-about-us/detail-about-us.component';
import {AboutComponent} from './about/about.component';
import { MainPagaContentComponent } from './main-paga-content/main-paga-content.component';
import { CarpenterComponent } from './carpenter/carpenter.component';
import { ElectricsComponent } from './electrics/electrics.component';
import { PaintComponent } from './paint/paint.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { PlumberComponent } from './plumber/plumber.component';
import { GasComponent } from './gas/gas.component';
import { SecurityComponent } from './security/security.component';
import { RoofComponent } from './roof/roof.component';
import { HandymanComponent } from './handyman/handyman.component';
import { LockComponent } from './lock/lock.component';
import { AlarmComponent } from './alarm/alarm.component';
import { OthersComponent } from './others/others.component';
import { CleanComponent } from './clean/clean.component';
import { ServComponent } from './serv/serv.component';
import { FrgtPaswrdComponent } from './frgt-paswrd/frgt-paswrd.component';
import { RenewPassComponent } from './renew-pass/renew-pass.component';

import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
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
    AboutComponent,
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
    RenewPassComponent
 ],
  imports: [
    
    FormsModule,
    HttpModule,
    BrowserModule,
    routes
  ],
  providers: [AuthService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }