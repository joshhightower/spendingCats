import {Directive, ElementRef, Input} from "@angular/core";

@Directive({
    selector:"[customHighlight]"
})

export class CustomHighlightDirective{

    @Input('customHighlight') highlightColour:string;

    constructor( private elementRef:ElementRef){

    }

    ngOnInit(){
        console.log("will colour in ",this.highlightColour);
        this.elementRef.nativeElement.style.backgroundColor = this.highlightColour || "yellow";
    }
}