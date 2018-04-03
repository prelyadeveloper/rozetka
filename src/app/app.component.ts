import { Component } from '@angular/core';
import {ProductsService} from "./services/products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
    providers: [ProductsService]
})
export class AppComponent {
  title = 'app';

  products;


  constructor(private prSrv: ProductsService) {


  }
}
