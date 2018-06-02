import { Injectable } from "@angular/core";
import { Http,Headers,Response } from "@angular/http";
import {Observable} from "rxjs";
import { LoginComponent } from "./login/login.component";

@Injectable()
export class AuthService{
constructor(private http: Http){
}

signup(name:string,email:string,password:string,c_password:string,phone:string)
{
    return  this.http.post('http://localhost:8000/api/register',
    {name:name,email:email,password:password,c_password:c_password,phone:phone},
    {headers:new Headers({'X-Requested-With':'XMLHttpRequest'})})
    }

    login(email:string,password:string)
{
    return  this.http.post('http://localhost:8000/api/login',
    {email:email,password:password},
    {headers:new Headers({'X-Requested-With':'XMLHttpRequest'})})
    }
}