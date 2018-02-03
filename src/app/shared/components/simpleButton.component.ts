import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'simple-button',
    template: `
        <div>
            {{inputLabel}}
            <button class="btn btn-primary" (click)="clickHandler()" >Fire</button>
         <div>   
        `
})
export class SimpleButton implements OnInit {

    constructor() {
    }
    @Input() inputLabel:string = '';

    @Output()
    buttonClickEvent = new EventEmitter<Object>();

    sampleData:Array<Number> = [1,2,3];


    clickHandler(){
        this.sampleData.push(0);
        var tempObj = {
            data:this.sampleData
        }
        this.buttonClickEvent.emit(tempObj)
    }

    ngOnInit() {

    }

}
