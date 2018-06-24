import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { error } from 'util';
import { Router } from '@angular/router';
import { TokenService } from '../Services/token.service';
import {HttpClient} from '@angular/common/http';
import { AuthService } from '../Services/auth.service';
import { DISABLED } from '@angular/forms/src/model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form={
    email:null,
    password:null,
  } 
  public error=null;
  showspinner:boolean=false;
  private popup:boolean=false;

  constructor(
              private router: Router,
              private token:TokenService,
              private http : HttpClient,
              private authService:AuthService,
            ) {
    
   }
  ngOnInit() {
  }

  resetForm(form? : NgForm)
  {
    if(form!=null)
        form.pristine;
          this.form={
            email:'',
          password:null,
      } 
      
  }

  private onLogin(form:NgForm){
    this.authService.login(this.form).subscribe((
      this.showspinner=true,
      data=>this.handleResponse(data)
    ));
  }

  handleResponse(data)
  {
     localStorage.setItem('token',data.data.api_key);
     if(localStorage.getItem('token')===data.data.api_key && data.data.api_key !==null)
     {
       
       this.router.navigate(['dashboard']);
       this.popup=false;
       
      
     }
     else
     {
       
      localStorage.removeItem('token');
      this.resetForm();
      this.showspinner=false;
      this.error="User name or Passwrod is not correct";
      
     }
     
  }
}
