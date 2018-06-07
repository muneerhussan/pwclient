import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { error } from 'util';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TokenService } from '../Services/token.service';
import {HttpClient} from '@angular/common/http';



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
  public data=null;

  constructor(private authService:AuthService,
              private router: Router,
              private token:TokenService,
              private http : HttpClient
            ) {
    
   }
  ngOnInit() {
  }

  btnClick= function () {
    this.router.navigate(['/dashboard']);
};

  private onLogin(form:NgForm){
    this.authService.login(this.form).subscribe(
       error => this.handleError(error),
       data  => this.handleResponse(data),

       
    )
  }
  handleError(error)
  {
     this.error=error.message;
  }

  handleResponse(data)
  {
      console.log(data.code);
  }


}
