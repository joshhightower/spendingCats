import { Component, OnInit } from '@angular/core';
import {AuthService} from "../core/auth.service";
import {Router} from "@angular/router";
import {ConfigService} from "../core/config.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private router:Router,
    private config:ConfigService) {

    this.flag = false;

  }
  currentUser:String = '';

  view: any[] = [700, 400];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  private flag:boolean;

  onSelect(event:any) {
    console.log(event);
  }


  single = [
  {
    "name": "Germany",
    "value": 8940000
  },
  {
    "name": "USA",
    "value": 5000000
  },
  {
    "name": "France",
    "value": 7200000
  }
];

  ngOnInit() {
    /*
    if(this.authService.isLoggedIn){
      this.currentUser = this.authService.user.email;
      //make call for showingstuff
    }
    else{
      this.router.navigate(['/login']);
    }
    */
  }

  navigateToSites(){
    this.router.navigate(['/sites']);
  }
  navigateToDevices(){
    this.router.navigate(['/devices']);
  }

  toggleVisibility(){
    this.flag = !this.flag;
  }

}
