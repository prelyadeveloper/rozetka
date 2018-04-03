import { Component, OnInit } from '@angular/core';
import {FiltersService} from "../../services/filters.service";
import {Filters} from "../../components/filters/filter";
import {ProductsService} from "../../services/products.service";
import { ActivatedRoute } from "@angular/router";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
    providers: [FiltersService]
})
export class ProductsPageComponent implements OnInit {

    public filters: Filters[];
    public savedFilters;
    public products;
    public productType: string;

    constructor(private fl: FiltersService,
                private prSrv: ProductsService,
                private route: ActivatedRoute) {

        this.route.params.subscribe( params => this.productType = params.type);

        this.fl.getFilters(this.productType).subscribe(value => {
            this.filters = value;
        });

        this.fl.getStoredFilters().subscribe(data => {
            this.savedFilters = this.fl.getStoredWrapper(data, this.productType) ;
            this.prSrv.getProducts(this.productType, this.savedFilters).subscribe(value => {
                this.products = value;
            });
        });
    }

    filterChanged(event) {
        if (this.fl.setStoredFilter(event, this.productType)) {
            setTimeout(() => {
                this.fl.getStoredFilters().subscribe(data => {
                    const savedFilters2 = this.fl.getStoredWrapper(data, this.productType) ;
                    this.prSrv.getProducts(this.productType, savedFilters2).subscribe(value => {
                        this.products = value;
                    });
                });
            }, 100);
        }
    }


  ngOnInit() {
  }

}
