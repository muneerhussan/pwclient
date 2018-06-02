import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { error } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onLogin(form:NgForm){
    this.authService.login(form.value.email,form.value.password)
    .subscribe(
      Response=>console.log(Response),
      error=>console.log(error),
    )
  }
}
