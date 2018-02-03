import { APP_INITIALIZER } from '@angular/core';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import {AuthService} from "./auth.service";


import { throwIfAlreadyLoaded } from './module-import-guard';
import {ConfigService} from "./config.service";
import {HttpHeaders} from "./httpHeaders";
import {DummyData} from "./dummyData.service";
import {LocalStorage} from "./local-storage.service";
import {AuthGuard} from "./auth.guard";

@NgModule({
  imports: [CommonModule,HttpModule],
  declarations: [],
  providers: [ConfigService,
              { provide: APP_INITIALIZER, useFactory: (config: ConfigService) => () => config.load(), deps: [ConfigService], multi: true },
              AuthService,
              HttpHeaders,
              DummyData,
              LocalStorage,
              AuthGuard]
})

export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
