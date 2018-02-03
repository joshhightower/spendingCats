import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {SharedModule} from "../shared/shared.module";
import {LoginRoutingModule} from "./login.routing";
import {LoginService} from "./login.service";
import { ModalModule } from 'ng2-bootstrap';
import {RegisterComponent} from "./register/register.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers:[LoginService],
  declarations: [LoginComponent,RegisterComponent]
})
export class LoginModule { }
