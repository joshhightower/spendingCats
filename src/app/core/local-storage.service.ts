/**
 * Created by wizni on 2/1/17.
 */


import {Injectable} from "@angular/core";
@Injectable()
export class LocalStorage{

    constructor(){
        if(typeof(Storage) !== null){
            console.log("can store..")
        }
        else{
            console.log("cant store..");
        }
    }

    getItem(input:string):any{

        var toReturn:any;
        toReturn = localStorage.getItem(input);
        return toReturn;

    }

    setItem(key:string,value:any){
        localStorage.setItem(key,value);
    }

    delete(input:string){
        localStorage.removeItem(input);
    }

    deleteAll(){
        localStorage.clear();
    }

}