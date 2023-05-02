import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private _http:HttpClient) { }

  signUp(userInfo:any){
    return this._http.post<{data:any}>("http://localhost:8000/base/register/",userInfo);
  }
  login(userInfo:any){
    return this._http.post<{data:any}>("http://localhost:8000/base/login/",userInfo);
  }
  crop_recommendation(info:any){
    return this._http.post<{}>("http://localhost:8000/base/crop_recommendation/",info);
  }
  isLoggedIn(){
    if(localStorage.getItem('user')===null)
        return false;
    else{
      return !!localStorage.getItem('user')
    }
  }
}
