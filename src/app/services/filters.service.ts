import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import {Filters} from "../components/filters/filter";
import 'rxjs/add/operator/map';
import { AsyncLocalStorage } from 'angular-async-local-storage';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
    })
};

@Injectable()
export class FiltersService {

    configUrl = 'dd';

    constructor(private http: HttpClient,
                protected localStorage: AsyncLocalStorage) { }

    getFilters(product_type: string) {
        return this.http.get('http://localhost:8888/rozetka/read.php?get=filters&product_type=' + product_type)
            .map(value => this.adjustFiltersResult(value));
    }

    getFilterDescr(id: string) {
        return this.http.get('http://localhost:8888/rozetka/read.php?get=filter_descr&filter_id=' + id);
    }


    setStoredFilter(filter: number, type: string) {

        this.localStorage.getItem('filters').subscribe((data) => {

            const data2 = data;
            if (data2) {
                const index1 = data2.findIndex(value => { return value.type === type; } );

                if (index1 !== -1 ) {
                    const index2 = data2[index1].filter_list.findIndex( value => { return value === filter; });

                    if (index2 !== -1) {
                        data2[index1].filter_list.splice(index2,1);
                    } else {
                        data2[index1].filter_list.push(filter);
                    }
                    this.localStorage.setItem('filters', data2).subscribe(() => {
                    });

                    return true;
                } else {

                    const filt = [{type: type, filter_list: [filter]}];

                    this.localStorage.setItem('filters', filt).subscribe(() => {
                    });
                return  true;
                }
            } else {
               const filt = [{type: type, filter_list: [filter]}];

                this.localStorage.setItem('filters', filt).subscribe(() => {
                });

                return true;
            }
        })

        return true;
    }

    getStoredFilters() {

            return this.localStorage.getItem('filters');


    }

    getStoredWrapper(data, type) {
        let data2 = data;
        let result = [];
        if (data2) {
            const index1 = data2.findIndex(value => {
                return value.type === type;
            });
            if (index1 !== -1) {
                return result = data2[index1].filter_list;
            }
        }
        return result;
    }


    adjustFiltersResult(value) {
        let filters = []
        for (const property in value) {
            const myFilter = new Filters();
            myFilter.title = property;
            myFilter.filters = [];
            for (let i = 0; i < value[property].length; i++ ) {
                if (!myFilter.filter_type_id) {
                    myFilter.filter_type_id = value[property][i].filter_type_id;
                }
                console.log(value[property][i].array)
                myFilter.filters.push({name: value[property][i].array.value, amount: value[property][i].array.amount, type: value[property][i].array.type, id: value[property][i].array.id});
            }
            filters.push(myFilter);
        }
        return filters;
    }


    getProductTypes() {
        return this.http.get('http://localhost:8888/rozetka/read.php?get=product_types');
    }

    addFilters(filters) {
        var params = new HttpParams();
        params = params.set('sendfilters', filters);
        return this.http.post('http://localhost:8888/my-api/product/read.php',params);
    }

}
