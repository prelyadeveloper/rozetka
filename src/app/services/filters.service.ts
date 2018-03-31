import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import {Filters} from "../components/filters/filter";

@Injectable()
export class FiltersService {

    configUrl = 'dd';
    constructor(private http: HttpClient) { }



    getFilters(product_type: string) {

        return this.http.get('http://localhost:8888/my-api/product/read.php?get=filters&product_type=' + product_type)
            .map(value => this.adjustFiltersResult(value));
    }
    getFilterDescr(id: string) {
        return this.http.get('http://localhost:8888/my-api/product/read.php?get=filter_descr&filter_id=' + id);
    }


    adjustFiltersResult(value) {


        let filters = []
        for (const property in value) {
            let myFilter = new Filters();
            myFilter.title = property;
            myFilter.filters = [];
            for (let i = 0; i < value[property].length; i++ ) {

                if (!myFilter.filter_type_id) {
                    myFilter.filter_type_id = value[property][i].filter_type_id;
                }
                myFilter.filters .push(value[property][i].array);
            }
            filters.push(myFilter);
        }

        return filters;
    }

}
