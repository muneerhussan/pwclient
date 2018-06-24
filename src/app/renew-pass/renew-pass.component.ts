import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-renew-pass',
  templateUrl: './renew-pass.component.html',
  styleUrls: ['./renew-pass.component.css']
})
export class RenewPassComponent implements OnInit {

   public error= null;
   public form = {
    email:null,
    password:null,
    password_confirmaiton:null,
    token:null,
  } 
  
  constructor
  (
    private route:ActivatedRoute,
    private authService:AuthService,
  ) 
   {
      route.queryParams.subscribe(params=>{
      this.form.token=params['token']
    });
  }

  ngOnInit() {
  }

  private onResetPassword(form:NgForm){
    this.authService.resetPassword(this.form).subscribe(
       error =>this.handleError(error)
    );
  }

  handleError(error)
  {
    this.error=error.message;
  }
}
