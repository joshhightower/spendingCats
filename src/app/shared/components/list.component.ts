import { Component,Input, OnInit } from '@angular/core';

@Component({
    selector: 'list-component',
    template:`
            <ul class="u_list">
                <li *ngFor="let item of dataProvider" (click)="onItemSelect(item)">
                    <span>{{item}}</span>
                </li>
            </ul>
            `
})
export class ListComponent implements OnInit {
    ngOnInit(){

    }
    constructor() { }
    @Input() dataProvider:Array<any>;
   

    onItemSelect(input:any){
        console.log("item clicked in list :",input);
        //  let link = ['/detail', input];
      //  this.router.navigate(link);
    }

}