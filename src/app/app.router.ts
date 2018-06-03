import{ModuleWithProviders} from '@angular/core';
import{Routes,RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
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

export const router : Routes=[
  
  {path:'home' , component:SiteLayoutComponent },
  {path:'about' , component:AboutComponent },
  {path:'alarm' , component:AlarmComponent },
  {path:'carpenter' , component:CarpenterComponent },
  {path:'electric' , component:ElectricsComponent },
  {path:'gas' , component:GasComponent },
  {path:'handyman' , component:HandymanComponent },
  {path:'lock' , component:LockComponent },
  {path:'maintenance' , component:MaintenanceComponent },
  {path:'others' , component:OthersComponent },
  {path:'paint' , component:PaintComponent },
  {path:'plumber' , component:PlumberComponent },
  {path:'roof' , component:RoofComponent },
  {path:'security' , component:SecurityComponent },
  {path:'detailAboutUs' , component:DetailAboutUsComponent },
  {path:'profile', component : ProfileComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'create_gig',component:CreateGigComponent},
  {path:'settings',component:SettingsComponent},
  {path:'clean',component:CleanComponent},
  {path:'serv',component:ServComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',redirectTo:'/home',pathMatch:'full'},
  ];
  export const routes:ModuleWithProviders = RouterModule.forRoot(router);

  