
import {Directive, forwardRef} from "@angular/core";
import {NG_VALIDATORS, FormControl} from "@angular/forms";

@Directive({
    selector:"[inputValidator]",
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => InputValidator), multi: true }
      //  { provide: NG_VALIDATORS, useValue: InputValidator, multi: true }
    ]
})

export class InputValidator{

    constructor(){
    }

    validate(fc:FormControl){
        console.log("in input validator validate function. 'jj' is only acceptable input");
        if(fc.value == 'jj'){
            return null;
        }
        else{
            return {inputField:{
                valid:false
            }};
        }

    }

}