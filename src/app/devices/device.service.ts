import { Injectable } from '@angular/core';
import {Http, Response, RequestOptionsArgs} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Observable, Subscriber} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ConfigService} from "../core/config.service";
import {HttpHeaders} from "../core/httpHeaders";
import {DummyData} from "../core/dummyData.service";

@Injectable()
export class DeviceService{

  constructor(private http: Http,
              private config:ConfigService,
              private dummyDataService:DummyData,
              private headerService:HttpHeaders) {

  }

  getDeviceData(): Observable<any[]> {
  //  let body = JSON.stringify({});
    let options: RequestOptionsArgs = <RequestOptionsArgs>{};

    if(this.config.CONFIG['offlineMode']){  // to be used when in offline mode.

      let offlineLoginResponse:Object = this.dummyDataService.getDeviceData();
      return new Observable<any>((subscriber: Subscriber<any>) => subscriber.next(offlineLoginResponse))
          .map(res => res);
    }
    else{
      let remoteURL:string = this.config.CONFIG['urls'];
      options.url = remoteURL['server'] +remoteURL['apiPrefix'] + '/' + 'devices';
      options.headers = this.headerService.headers;
      return this.http.get(``, options)
          .map((r: Response) => r.json())
          .catch(this.handleObservableError);

    }
  }

  handleObservableError(error:any){
    return Observable.throw(error.json().error || 'Unable to get list of devices.');
  }

}