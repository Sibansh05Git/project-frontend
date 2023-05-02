import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router:Router) { }
  notAvailable:boolean = true;
  ngOnInit(): void {
    if(!!localStorage.getItem('user')){
      this.notAvailable = false;
    }
  }
  onClick(){
    localStorage.clear();
    this.notAvailable = true
    this.router.navigate(['/home'])
  }

}
