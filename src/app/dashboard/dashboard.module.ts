import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import { DashboardRoutingModule } from './dashboard.routing';
import {SharedModule} from "../shared/shared.module";
import {AuthService} from "../core/auth.service";


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  providers:[],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
