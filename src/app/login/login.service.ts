import { Injectable } from '@angular/core';
import {Headers, Http, Response, RequestOptionsArgs} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Observable, Subscriber} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {LoginResponseVO} from "./models/LoginResponseVO";
import {LoginRequestVO} from "./models/LoginRequestVO";
import {ConfigService} from "../core/config.service";
import {HttpHeaders} from "../core/httpHeaders";
import {DummyData} from "../core/dummyData.service";




@Injectable()
export class LoginService{

  constructor(private http: Http,
              private config:ConfigService,
              private headerService:HttpHeaders,
              private dummyDataService:DummyData) {

  }

  login(loginVO:LoginRequestVO): Observable<any[]> {
    let body = JSON.stringify(loginVO);
    let options: RequestOptionsArgs = <RequestOptionsArgs>{};
    let remoteURL:string = this.config.CONFIG['urls'];

    options.url = remoteURL['server'] + 'login';

    options.headers = this.headerService.unsecuredHeaders;   // use headers.append(key,value) to make any changes here.

    if(this.config.CONFIG['offlineMode']){  // to be used when in offline mode.

      let offlineLoginResponse:Object = this.dummyDataService.getLoginData();
      return new Observable<any>((subscriber: Subscriber<any>) => subscriber.next(offlineLoginResponse))
          .map(res => res);
      /*.then(result => offlineLoginResponse = result
                return new Observable<any>((subscriber: Subscriber<any>) => subscriber.next(offlineLoginResponse))
                      .map(o => JSON.stringify(o))
          );*/
    }
    else{
      return this.http.post(``, body, options)
          .map((r: Response) => r.json() as LoginResponseVO)
          .catch(this.handleObservableError);
    }
  }

  validateSession(existingSession:any): Observable<any[]> {
    let body = JSON.parse(existingSession);
    let options: RequestOptionsArgs = <RequestOptionsArgs>{};
    let remoteURL:string = this.config.CONFIG['urls'];

    options.url = remoteURL['server'] + 'validateSession';

    options.headers = this.headerService.unsecuredHeaders;

    if(this.config.CONFIG['offlineMode']){  // to be used when in offline mode.

      let offlineLoginResponse:Object = this.dummyDataService.getLoginData();
      return new Observable<any>((subscriber: Subscriber<any>) => subscriber.next(offlineLoginResponse))
          .map(res => res);
    }
    else{
      return this.http.post(``, body, options)
          .map((r: Response) => r.json() as LoginResponseVO)
          .catch(this.handleObservableError);
    }
  }

  handleObservableError(error:any){
    return Observable.throw(error.json().error || 'You cant play mario on ubuntu');
  }

}