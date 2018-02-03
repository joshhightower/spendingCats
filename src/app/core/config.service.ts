import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";


@Injectable()
export class ConfigService{

    public CONFIG:Object;
    private env:string;

    constructor(private http:Http) {

    }
/*
    load(){
        this.http.get("../../config/appConfig.json")
            .map((res:Response) => res.json())
            .catch((error: any) => {
                console.error('could not read the config file',error);
                return Observable.throw(error.json().error || 'some random error');
            })
            .subscribe((data) => {
                console.log('Loaded the config file')
                this.CONFIG = data;
            });
    }

*/

    load() {
        console.log("trying to read the config files.")
        return new Promise((resolve, reject) => {
            this.http.get('../../config/env.json')
                .map( res => res.json() )
                .catch((error: any):any => {
                    console.error('Configuration file "env.json" could not be read');
                    resolve(true);
                    return Observable.throw(error.json().error || 'Server error');
                })
                .subscribe( (envResponse) => {
                    console.log('Configuration file "env.json" read');
                    this.env = envResponse['env'];
                    let fileURL:string = '';

                    switch (this.env) {
                        case 'prod': {
                            fileURL = '../../config/appConfig.' + this.env + '.json';
                        }
                        break;
                        case 'dev': {
                            fileURL = '../../config/appConfig.' + this.env + '.json';
                        }
                        break;
                        case 'default': {
                            console.error('Environment file is not set or invalid');
                            resolve(true);
                        }
                        break;
                    }

                    if(fileURL !== '') {
                        this.http.get(fileURL)
                        .map( res => res.json() )
                        .catch((error: any) => {
                            console.error('Error reading ' + this.env + ' configuration file');
                            resolve(error);
                            return Observable.throw(error.json().error || 'Server error');
                        })
                        .subscribe((responseData:any) => {
                            console.log('Loaded ' + this.env + ' configuration file');
                            this.CONFIG = responseData;
                            resolve(true);
                        });
                    }
                    else{
                        console.error('Env config file "env.json" is not valid');
                        resolve(true);
                    }
                });

            });
        }

    }
