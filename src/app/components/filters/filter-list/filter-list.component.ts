import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import {ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'app-filter-list',
    templateUrl: './filter-list.component.html',
    styleUrls: ['./filter-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('myAwesomeAnimation', [
            state('small', style({
                height: '0px',
                overflow: 'hidden',
                'min-height': '0%'
})),
            state('large', style({
                height: '100%',
                overflow: 'hidden',
                'min-height': '100%'
            })),
            transition('hidden => show', [
                animate('3s ease-in')
            ])
        ]),
    ]
})

export class FilterListComponent implements OnInit {

    @Input() savedFilters;
    @Input() filters;
    @Output() filterChanged = new EventEmitter();
    state = 'small';
    countDisabled = 0;

    constructor() {}

    ifChecked(id: number) {
       if (!this.savedFilters) {
           return false;
       } else {
           return this.savedFilters.findIndex(value => id === value) !== -1;
       }
    }
    disabledCount(amount) {

        // if (amount === '0') {
        //     this.countDisabled +=1;
            console.log(amount);
        // }

    }

    animate() {
        this.state = this.state === 'small' ? 'large' : 'small';
    }

        ngOnInit() {

        console.log(this.filters);
        }

    filterChanged2(event) {
       this.filterChanged.emit(event);
    }

}