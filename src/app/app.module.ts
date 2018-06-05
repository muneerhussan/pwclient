import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ImagesliderComponent } from './imageslider/imageslider.component';
import { ServicesBarComponent } from './services-bar/services-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { APP_ROOT } from '@angular/core/src/di/scope';
import { RouterModule,Routes} from '@angular/router';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateGigComponent } from './create-gig/create-gig.component';
import { SettingsComponent } from './settings/settings.component';
import { DetailAboutUsComponent } from './detail-about-us/detail-about-us.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
const appRoutes : Routes=[
  
  {path:'home' , component:SiteLayoutComponent },
  {path:'detailAboutUs' , component:DetailAboutUsComponent },
  {path:'profile', component : ProfileComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'create_gig',component:CreateGigComponent},
  {path:'settings',component:SettingsComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',redirectTo:'/home',pathMatch:'full'}

]
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
    SignupComponent,
    ConfirmEqualValidatorDirective,


 ],
  imports: [
    
    FormsModule,
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AuthService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }