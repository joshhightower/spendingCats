import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";


@Injectable()
export class DummyData{

    constructor() {

    }

    getLoginData():Object {      //todo find a way to delay the response by 1 sec.
        return {
            "user": {
                "name": "Topsy Kret",
                "roles": ['OfflineUser','Admin'],
                "email": "qqq@bnh.com",
                "authToken": "11111.OFFLINETOKEN_!!!!!",
            }
        }
    }

    getListData():Object {
        return ['a','b','c','d'];
    }

    getDeviceData():Object {
        return [
            {
                type:'dummy type 1',
                model:'dummy model 1'
            },
            {
                type:'dummy type 2',
                model:'dummy model 2'
            }
        ];
    }
    /*
    getData():Promise<any>{
        return Promise.resolve({
            "authToken": "11111.OFFLINETOKEN_!!!!!",
            "user": {
                "username": "User 3i",
                "roles": "superman",
                "email": "qqq@bnh.com"
            }
        });
    }

    getLoginData(): Promise<Number[]> {
        return new Promise<any>(resolve =>
            setTimeout(resolve, 1000)) // delay 1 seconds
            .then(() => this.getData());
    }
    */

}
