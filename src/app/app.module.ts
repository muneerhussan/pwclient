import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import{routes} from './app.router';

import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
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
import { MainHeaderComponent } from './layout/main-header/main-header.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { ProfileHeaderComponent } from './layout/profile-header/profile-header.component';
import { ProfileLayoutComponent } from './layout/profile-layout/profile-layout.component';
import { GigListViewComponent } from './gig-list-view/gig-list-view.component';
import { ManageRequestComponent } from './manage-request/manage-request.component';
import { GigDetailComponent } from './gig-detail/gig-detail.component';

import {SignupComponent}  from './signup/signup.component';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    ImagesliderComponent,
    ServicesBarComponent,
    ProfileComponent,
    SiteLayoutComponent,
    DashboardComponent,
    CreateGigComponent,
    SettingsComponent,
    DetailAboutUsComponent,
    SignupComponent,
    ConfirmEqualValidatorDirective,

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
    RenewPassComponent,
    MainHeaderComponent,
    MainLayoutComponent,
    ProfileHeaderComponent,
    ProfileLayoutComponent,
    GigListViewComponent,
    ManageRequestComponent,
    GigDetailComponent
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