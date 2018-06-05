import { Injectable } from "@angular/core";
import { Http,Headers,Response } from "@angular/http";
import {Observable} from "rxjs";
import { LoginComponent } from "./login/login.component";

@Injectable()
export class AuthService{
constructor(private http: Http){
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