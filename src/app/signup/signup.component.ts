import { Component, OnInit } from '@angular/core';
import {NgForm}  from "@angular/forms";
import { error } from 'util';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form={
    name:null,
    email:null,
    password:null,
    c_password:null,
    phone:null,
  }

  public error=null;
  constructor(private authService:AuthService,
              private router: Router ) { }

  ngOnInit() {
  }

  onSignUpbtnClick= function () {
    this.router.navigate(['/dashboard']);
};
  onSignup(form:NgForm){

    this.authService.signup(this.form)
    .subscribe(
      error=>this.handleError(error),
    )
  }

  handleError(error)
  {
     this.error=error.message;
  }
}
