import { Component, OnInit } from '@angular/core';

import {forEach} from "@angular/router/src/utils/collection";
import {FiltersService} from "../../services/filters.service";
import {Filters} from "./filter";
// export interface Filters {
//     [key: string]: Array<{id: number, value: string, type: string}>,
//      [id:number]: number
// }


@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss'],
    providers: [FiltersService]
})




export class FiltersComponent implements OnInit {


    public filters: Filters[];
    constructor(private fl: FiltersService) {

        this.fl.getFilters('mobile').subscribe(value => {
             this.filters = value;
             console.log(this.filters);
        });
    }

    func(){

    }

    ngOnInit() {
    }

}
