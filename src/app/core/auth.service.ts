import {Injectable} from '@angular/core';
import {UserInfo} from "../shared/models/user-info";

@Injectable()
export class AuthService{

  constructor() { }

  public isLoggedIn:boolean = false;
  public user:UserInfo;
  //public authToken:string;

}
