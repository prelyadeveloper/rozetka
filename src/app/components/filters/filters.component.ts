import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {forEach} from "@angular/router/src/utils/collection";
import {FiltersService} from "../../services/filters.service";
import {Filters} from "./filter";

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss'],
    providers: [FiltersService]
})


export class FiltersComponent implements OnInit {

    @Input() filters: Filters[];
    @Input()  savedFilters;
    @Output() changedFilters = new EventEmitter();

    ngOnInit() {}

    filterChanged(event) {
        this.changedFilters.emit(event);
    }


}
