import { Component, OnInit } from '@angular/core';
import {NgForm}  from "@angular/forms";
import { AuthService } from '../auth.service';
import { error } from 'util';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onSignup(form:NgForm){

    this.authService.signup(form.value.name,form.value.email,form.value.password,form.value.c_password,form.value.phone)
    .subscribe(
      Response=>console.log(Response),
      error=>console.log(error),
    )
  }

}
