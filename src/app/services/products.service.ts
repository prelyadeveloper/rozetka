import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ProductsService {

  constructor(private  http: HttpClient) { }


  getProducts(cat: string , filters = []) {
    if (filters.length > 0) {
        return this.http.get('http://localhost:8888/rozetka/read.php?get=products&cat=' + cat + '&filters=' + filters.join());
    } else {
        return this.http.get('http://localhost:8888/rozetka/read.php?get=products&cat=' + cat);
    }
  }

}
