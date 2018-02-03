import { Component, OnInit } from '@angular/core';
import {DeviceService} from "./device.service";

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html'
})
export class DevicesComponent implements OnInit {

  constructor(private deviceService:DeviceService) {
      this.gridViewModel =[
          {
              prop:'model',
              name:'Device Model'
          },
          {
              prop:'type',
              name:'Device Type'
          }
      ];
  }

  ngOnInit() {
    this.deviceService.getDeviceData()
        .subscribe(
            (receivedData: any) => {
                this.gridDataProvider = receivedData;
            },
            (error:any) =>{
                window.alert(error);
            });
  }

  private pageHeader= 'This is the device page';
  private gridDataProvider:Array<any>;
  private gridViewModel:Array<any>;




}
