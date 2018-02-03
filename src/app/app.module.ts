import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {AppRoutingModule} from "./app.routing";

//our items below - load the "non-lazy" modules.
import { DashboardModule } from "./dashboard/dashboard.module";
import {LoginModule} from "./login/login.module";
import {CoreModule} from "./core/core.module";  //httpmodule moved here.


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    DashboardModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
