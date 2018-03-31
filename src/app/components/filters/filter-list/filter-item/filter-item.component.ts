import { Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-filter-item',
    templateUrl: './filter-item.component.html',
    styleUrls: ['./filter-item.component.scss']
})
export class FilterItemComponent implements OnInit {


    @Input() filterValue: {id: number, value: string, type: string} ;

    constructor() { }

    ngOnInit() {
    }

}
