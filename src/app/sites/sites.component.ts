import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../core/config.service";
import {AuthService} from "../core/auth.service";
import {Router} from "@angular/router";
import {NgForm, FormGroup, FormControl, Validators, FormArray, FormBuilder} from "@angular/forms";
import {Observable} from "rxjs";

//import * as _ from 'lodash';


@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html'
  /*,
  styleUrls: ['./sites.component.css']*/
})
export class SitesComponent implements OnInit {

  constructor(
      private config:ConfigService,
      private authService:AuthService,
      private router:Router,
      private formBuilder:FormBuilder
  ) {
      /*   // either use this approach ... or use FormBuilder service as per below...
      this.form2 = new FormGroup({
          siteName2: new FormControl('default',Validators.required),
          siteType2: new FormControl('1',[Validators.required,Validators.pattern('^[0-9]*$')]),
          infoFields: new FormGroup({
              siteLocation2:new FormControl(),
              sitePriority2:new FormControl()
          }),
          list2:new FormArray([
              new FormControl('list-item1')
          ])
      })
      */

      this.form2 = formBuilder.group({
          siteName2:['default',Validators.required],        // <default value>,[validators]
          siteType2:['1',[Validators.required,Validators.pattern('^[0-9]*$')]],
          infoFields:formBuilder.group({
              siteLocation2:['',this.customValidator],      // added a custom validator .. without ()... just a pointer
              sitePriority2:['',[],this.asyncValidator]     // added an async validator. TODO should be used with debounce
          }),
          list2:formBuilder.array([
              ['list-item1']
          ])
      })

  }

  ngOnInit() {
      if(this.authService.isLoggedIn){
          // the two form events' handlers below can be used to fire some action
          this.form2.valueChanges.subscribe(
              (input:any) => console.log("In value change handler ",input)
          );
          this.form2.statusChanges.subscribe(
              (input:any) => console.log(input)
          );
      }
      else{
          this.router.navigate(['/login']);
      }
  }

  private pageHeader= 'This is the sites page';
  private compoHeader = 'Button in sites ->';
  private listData:Array<any>;
  private form1Input = {
      sitename:'',
      sitetype:''
  }

  form2:FormGroup;      // initailize in constructor. specify in formGroup directive in html

  buttonClickHandler(evt:any){
      console.log('This is an example to Child -> Parent flow');
      console.log(evt.data); // (evt && evt.data)
      console.log('This is an example of sibling communication');
      this.listData = evt.data


  }
// [] --> model to view
  onSubmit_1(input:NgForm){
      console.log('in submit',input.value,this.form1Input);
      // we can user either 'input.value' or 'form1Input' going forward. but form1Input wont tell u if value is valid or not.
  }

  onSubmit_2(input:NgForm){
      console.log("subimitted form 2:",this.form2);
  }

  addFormItems(){
      (<FormArray>this.form2.controls['list2']).push(new FormControl());
  }

  customValidator(control:FormControl):{[out:string]:boolean}{
      let temp:Array<string> = control.value.toString().split('.');
      if(control.value === 'city' ){    //accept any value except 'city'
          return {invalid:true};    // if validation failing ... send an object where value = true.. anything other than null will mean validation has failed.
      }
      else{
          return null;      //return null if validated
      }
  }

  asyncValidator(control:FormControl):Promise<any>|Observable<any>{ //async validator. will only validate even nos. Should return a promise or an observable.
      const promise = new Promise<any>(
          (resolve,reject) =>{
              setTimeout(()=>{
                  if(control.value % 2 == 0){
                      resolve(null);
                  }
                  else{
                      resolve({invalid:true});
                  }
              },2000)
          }
      );
      return promise;

    }


}
