import { Injectable } from "@angular/core";
import { Headers,Response } from "@angular/http";
import {Observable} from "rxjs";
import { LoginComponent } from "./login/login.component";
import {SignupComponent}  from "./signup/signup.component";
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService{
constructor(private http : HttpClient){
}

       signup(data)

            {
                return  this.http.post('http://localhost:8000/api/register',data);
            }

        login(data)

            {
                return  this.http.post('http://localhost:8000/api/login',data);
            }
}