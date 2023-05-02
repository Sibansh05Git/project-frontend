import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardservieService implements CanActivate{

  constructor(private router:Router) { }

  canActivate(){
    if(!localStorage.getItem('user')){
      this.router.navigate(['/home'])
      return false
    }
    else{
      return true
    }
  }
}
