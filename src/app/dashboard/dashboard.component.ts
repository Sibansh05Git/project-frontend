import { Component, OnInit } from '@angular/core';
import { UserServicesService } from '../services/user-services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService:UserServicesService) { }
  n!:string
  p!:string
  k!:string
  label!:string
  resultn!:string
  resultp!:string
  resultk!:string
  data!:any
  message!:string
  ngOnInit(): void {
  }
  onSubmit(){
    if(this.n!=''&&this.p!=''&&this.k!=''&&this.label!=''){
      const info = {
        n:this.n,
        p:this.p,
        k:this.k,
        label:this.label
      }
      this.userService.crop_recommendation(info).subscribe(response =>{
        console.log(response)
        this.data = response
        this.resultk = this.data.K
        this.resultn = this.data.N
        this.resultp = this.data.P
      })
    }
    else{
      this.message = 'Please fill the details'
    }
  }
}
