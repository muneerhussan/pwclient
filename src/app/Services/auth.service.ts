import { Injectable } from "@angular/core";
import { Headers,Response } from "@angular/http";
import {Observable} from "rxjs";
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

            
            forgetpassword(data)
            {
                return  this.http.post('http://localhost:8000/api/password/email',data);
            }
            
        resetPassword(data)
        {
            return this.http.post('http://localhost:8000/api/password/reset',data);
        }
}