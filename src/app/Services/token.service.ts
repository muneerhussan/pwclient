import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
 
  handle(token)
    {
      this.set(token);
      if(localStorage.getItem('token')!=null)
      return true;
    }
    set(token){

        localStorage.setItem('token',token);
    }
    remove()
    {
      localStorage.removeItem('token');
    }
}
