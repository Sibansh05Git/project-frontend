import { Component, OnInit } from '@angular/core';
import { UserServicesService } from '../services/user-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserServicesService) { }
  name:string = ''
  password:string = ''
  message:string = ''

  ngOnInit(): void {
  }

  onClick(){
    const userInfo = {
      username:this.name,
      password:this.password
    }
    if(this.name != '' && this.password != ''){
      this.userService.signUp(userInfo).subscribe(response=>{
        console.log(response.data)
        this.message = response.data;
      },err=>{
        if(err.error.message === undefined ){
          this.message = err.error
        }
        else{
          this.message = err.error.message
        }
      })
    }
    else{
      this.message = `Please fill the required fields.`
    }
  }


}
