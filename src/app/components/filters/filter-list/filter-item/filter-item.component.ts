import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {el} from "@angular/platform-browser/testing/src/browser_util";
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';


@Component({
    selector: 'app-filter-item',
    templateUrl: './filter-item.component.html',
    styleUrls: ['./filter-item.component.scss']
})
export class FilterItemComponent implements OnInit{

    private subject = new Subject<any>();


    @Output() filterChanged = new EventEmitter();
    @Input() filterValue: {id: number, amount: string, name: string, type: string} ;
    @Input() checked;

    constructor() {}

    ngOnInit() {}

    ifDisabled(amount) {
        return amount > 0 ? false : true;
    }

    filterChange(element: HTMLInputElement) {
        this.filterChanged.emit(element.value);
    }










}
