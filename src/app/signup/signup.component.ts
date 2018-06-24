import { Component, OnInit } from '@angular/core';
import {NgForm}  from "@angular/forms";
import { error } from 'util';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';



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

  showspinner:boolean=false;
  private popup:boolean=false;
  public error=null;
  constructor(private authService:AuthService,
              private router: Router ) { }

  ngOnInit() {}
  onSignup(form:NgForm){

    this.authService.signup(this.form).subscribe((
      this.showspinner=true,
      this.popup=false,
      data=>this.handleResponse(data)
      
    ));
  }

  handleResponse(error)
  {
     this.error=error.message;
     this.showspinner=false;
  }
}
