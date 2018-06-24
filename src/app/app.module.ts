import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import{routes} from './app.router';

import { LoginComponent } from './login/login.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
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
import { MainHeaderComponent } from './layout/main-header/main-header.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { ProfileHeaderComponent } from './layout/profile-header/profile-header.component';
import { ProfileLayoutComponent } from './layout/profile-layout/profile-layout.component';
import { GigListViewComponent } from './gig-list-view/gig-list-view.component';
import { ManageRequestComponent } from './manage-request/manage-request.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AboutComponent } from './about/about.component';
import { AlarmComponent } from './alarm/alarm.component';
import { CarpenterComponent } from './carpenter/carpenter.component';
import { CleanComponent } from './clean/clean.component';
import { CreateGigComponent } from './create-gig/create-gig.component';
import { MainPagaContentComponent } from './main-paga-content/main-paga-content.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './Services/auth.service';
import { AuthGuard } from './auth.guard';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    FooterComponent,
    ImagesliderComponent,
    ServicesBarComponent,
    ProfileComponent,
    SiteLayoutComponent,
    DashboardComponent,
    SignupComponent,
    SettingsComponent,
    DetailAboutUsComponent,
    ConfirmEqualValidatorDirective,
    ElectricsComponent,
    PaintComponent,
    MaintenanceComponent,
    PlumberComponent,
    GasComponent,
    SecurityComponent,
    RoofComponent,
    HandymanComponent,
    LockComponent,
    OthersComponent,
    ServComponent,
    FrgtPaswrdComponent,
    RenewPassComponent,
    AlarmComponent,
    MainHeaderComponent,
    MainLayoutComponent,
    ProfileHeaderComponent,
    ProfileLayoutComponent,
    GigListViewComponent,
    ManageRequestComponent,
    CarpenterComponent,
    CleanComponent,
    CreateGigComponent,
    AboutComponent,
    MainPagaContentComponent,
    LoadingSpinnerComponent,
 ],
  imports: [
    
    FormsModule,
    HttpModule,
    BrowserModule,
    routes,
    HttpClientModule,
  
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [ AppComponent ]
})
export class AppModule { }