import { Component, OnInit } from '@angular/core';
import {NgForm}  from "@angular/forms";
import { AuthService } from '../auth.service';
import { error } from 'util';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
      Response=>console.log(Response),
      error=>console.log(error),
    )
  }
}
