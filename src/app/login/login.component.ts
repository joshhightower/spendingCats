import { Component, OnInit } from '@angular/core';
import {AuthService} from "../core/auth.service";
import {Router} from "@angular/router";
import {LoginService} from "./login.service";
import {LoginRequestVO} from "./models/LoginRequestVO";
import {LoginResponseVO} from "./models/LoginResponseVO";
import {UserInfo} from "../shared/models/user-info";
import {ConfigService} from "../core/config.service";
import { ModalDirective } from 'ng2-bootstrap';
import {LocalStorage} from "../core/local-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  private userName:string;
  private password:string;

  constructor(
    private authService:AuthService,
    private loginService:LoginService,
    private router:Router,
    private config:ConfigService,
    private localStorage:LocalStorage
  ) { }

  ngOnInit() {
      console.log("checking for prev session")
      let prevSession:Object = this.localStorage.getItem('userAuthData');

     if(prevSession !== null){
         console.log("prev session found",prevSession)
           this.loginService.validateSession(prevSession)
              .subscribe(
                  (receivedData: any) => {
                      this.authService.user = receivedData as UserInfo;
                      this.authService.isLoggedIn = true;
                      this.router.navigate(['/dashboard']);         //TODO we should maintain wherever user originally wanted to go..instead of dumping on dashboard
                  },
                  (errorMsg:any) =>{
                      window.alert(errorMsg);
                  }
              )
      }
      else{
          console.log("no prev session found")
      }
  }

  login(){
    let loginRequestVO:LoginRequestVO = new LoginRequestVO(this.userName,this.password);
    this.loginService.login(loginRequestVO)
        .subscribe(
            (receivedData: any) => {
                this.authService.user = receivedData as UserInfo;
                this.authService.isLoggedIn = true;
              //  this.authService.authToken = receivedData.authToken;
                this.localStorage.setItem('userAuthData',JSON.stringify(this.authService.user));
                //this.localStorage.setItem('authToken',this.authService.authToken);
                this.router.navigate(['/dashboard']);
            },
            (errorMsg:string) =>{
                window.alert(errorMsg);
            })

  }

}
