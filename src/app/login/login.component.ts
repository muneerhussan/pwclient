import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { error } from 'util';
import { Router } from '@angular/router';
import { Http } from '@angular/http';


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
  
  constructor(private authService:AuthService,
              private router: Router) {
    
   }
  ngOnInit() {
  }

  btnClick= function () {
    this.router.navigate(['/dashboard']);
};

  onLogin(form:NgForm){
    this.authService.login(this.form)
    .subscribe(
      error=>console.log(error)
    )
  }
}
