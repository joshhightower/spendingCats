import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {SimpleButton} from "./components/simpleButton.component";
import {ListComponent} from "./components/list.component";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {ReverseNgIf} from "./directives/reverseNgif";
import {CustomHighlightDirective} from "./directives/customHiglight";
import {InputValidator} from "./directives/validators";



@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    MaterialModule.forRoot(),   //TODO find out ... why .forRoot()
    ButtonsModule,
    NgxDatatableModule
  ],
  exports:[         //TODO adding all external modules and custom components/directives in a single place might be a bad practice. Read up on this
      MaterialModule,
      FormsModule,
      SimpleButton,
      ListComponent,
      NgxChartsModule,
      ButtonsModule,
      NgxDatatableModule,
      ReverseNgIf,
      CustomHighlightDirective,
      InputValidator
  ],
  declarations: [SimpleButton,ListComponent,ReverseNgIf,CustomHighlightDirective,InputValidator]
})
export class SharedModule { }
