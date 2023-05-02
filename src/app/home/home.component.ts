import { Component, OnInit } from '@angular/core'; 
import { UserServicesService } from '../services/user-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService:UserServicesService,private router:Router) { }

  message:string = '';
  email:string='';
  password:string= ''
  data!:any



  ngOnInit(): void {
  }
  onClick(){
    const info={
      username:this.email,
      password:this.password
    }
    if(this.email!='' && this.password !=''){
      this.userService.login(info).subscribe(response=>{
        this.data = response
        localStorage.setItem('user',this.data.access)
        this.router.navigate(['/loggedIn/dashboard'])
      })
    }
    else{
      this.message = `Please Enter the required fields`;
    }
  }
}
