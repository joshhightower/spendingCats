import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login.service";
import {FormGroup, FormBuilder, Validators, NgForm, FormControl} from "@angular/forms";



@Component({
  selector: 'register-user',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  private registerUserForm:FormGroup;

  constructor(
        private loginService:LoginService,
        private formBuilder:FormBuilder
      ) {
      this.registerUserForm = formBuilder.group({
            userName:['',Validators.required],
            passwordFields:formBuilder.group({    // we had to make a form group over here. Control validators cant get access to other fields.
              password:['',[Validators.required,Validators.minLength(6)]],
              confirmPassword:['',[Validators.required,Validators.minLength(6)]],
            },{validator:this.passwordValidator}),
            email:['',[Validators.required]]
      });
  }

  ngOnInit() {

  }

  registerUser(){
    console.log(this.registerUserForm);
  }


  passwordValidator(group:FormGroup):{[out:string]:boolean}{
    if(group.value.password !== group.value.confirmPassword){
      return {invalid:true};    // if validation failing ... send an object where value = true.. anything other than null will mean validation has failed.
    }
    else{
      return null;      //return null if validated
    }
  }

}
