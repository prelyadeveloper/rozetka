import { Component, OnInit, Input } from '@angular/core';

import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
    selector: 'app-filter-list',
    templateUrl: './filter-list.component.html',
    styleUrls: ['./filter-list.component.scss'],
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


    @Input() filters;
    state = 'small';
    height;

    constructor() {





    }

    animate() {

        this.state = this.state === 'small' ? 'large' : 'small';
    }

    ngOnInit(){
        console.log(this.filters);

        this.height = 100;
    }

}