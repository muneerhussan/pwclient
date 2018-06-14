import{ModuleWithProviders} from '@angular/core';
import{Routes,RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
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

 const router : Routes=[
   
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home' , component:SiteLayoutComponent },
  {
    path:'',
    component:MainLayoutComponent,
    children:[

  //site route goes here
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
  {path:'clean',component:CleanComponent},
  {path:'serv',component:ServComponent},
  {path:'forgetPassword',component:FrgtPaswrdComponent},
  {path:'renewPassword',component:RenewPassComponent},
  {path:'login', component: LoginComponent},
  
]
},
//profile routes goes here
{
  path:'',
  component:ProfileLayoutComponent,
  children:[
  {path:'profile', component : ProfileComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'create_gig',component:CreateGigComponent},
  {path:'settings',component:SettingsComponent},
  {path:'gig-listView',component:GigListViewComponent},
  {path:'manage-request',component:ManageRequestComponent},
  {path:'gig-Detail',component:GigDetailComponent},
]
},
  {path:'**',redirectTo:'/home',pathMatch:'full'},
  ];
  export const routes:ModuleWithProviders = RouterModule.forRoot(router);

  