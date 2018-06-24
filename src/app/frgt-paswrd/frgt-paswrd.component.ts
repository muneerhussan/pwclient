import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-frgt-paswrd',
  templateUrl: './frgt-paswrd.component.html',
  styleUrls: ['./frgt-paswrd.component.css']
})
export class FrgtPaswrdComponent implements OnInit {

  public form={
    email:null,
  } 
  public error=null;
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  private forgetpass(form:NgForm){
    this.authService.forgetpassword(this.form).subscribe(
       error =>this.handleError(error)

    );
  }

  handleError(error)
  {
     this.error=error.message;
  }
}
