import {Directive, ElementRef, Output, EventEmitter, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appOutsideClick]'
})
export class OutsideClickDirective implements OnInit {

    @Input('appOutsideClick') aa;
    constructor(private _elementRef: ElementRef) {


    }


    ngOnInit(){
        console.log(this.aa + '4');
    }

    @Output()
    public clickOutside = new EventEmitter();

    @HostListener('document:click', ['$event.target'])
    public onClick(targetElement) {
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside && this.aa === 'show') {
            this.clickOutside.emit(null);
        }
    }



}
