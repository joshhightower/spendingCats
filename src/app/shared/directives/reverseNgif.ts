import {TemplateRef, ViewContainerRef, Input, Directive} from "@angular/core";

@Directive({
    selector:"[reverseNgIf]"
})

export class ReverseNgIf{

    private _reverseNgIf:boolean;

    @Input() set reverseNgIf(input:boolean){
        this._reverseNgIf = input;
        if(this._reverseNgIf == false){
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
        else{
            this.viewContainerRef.clear();
        }
    }
    constructor(private templateRef:TemplateRef<any>,
                private viewContainerRef:ViewContainerRef ){

    }


    // This is a structural directive
    // requires 2 things ... 1) what - accessed with TemplateRef
    //                       2) where - accessed with ViewContainerRef
}