import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitesComponent } from './sites.component';
import {SitesRoutingModule} from "./sites.routing";
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SitesRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SitesComponent]
})
export class SitesModule { }
