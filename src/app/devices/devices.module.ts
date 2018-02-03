import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesComponent } from './devices.component';
import {DevicesRoutingModule} from "./devices.routing";
import {DeviceService} from "./device.service";

import { ButtonsModule } from 'ng2-bootstrap/buttons';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    DevicesRoutingModule,
    SharedModule,
    ButtonsModule.forRoot()
  ],
  providers:[DeviceService],
  declarations: [DevicesComponent]
})
export class DevicesModule { }
