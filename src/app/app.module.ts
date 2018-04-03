import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { FiltersComponent } from './components/filters/filters.component';
import { FilterListComponent } from './components/filters/filter-list/filter-list.component';
import { FilterItemComponent } from './components/filters/filter-list/filter-item/filter-item.component';
import { ObjectKeyPipe } from './pipes/object-key.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterDetailComponent } from './components/filters/filter-list/filter-detail/filter-detail.component';
import { FilterDecriptionComponent } from './components/filters/filter-list/filter-detail/filter-decription/filter-decription.component';
import {ClickOutsideModule} from "ng-click-outside";
import { OutsideClickDirective } from './directives/outside-click.directive';
import { AdminkaComponent } from './pages/adminka/adminka.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ItemControllComponent } from './components/item-controll/item-controll.component';
import { NestedFormComponent } from './components/nested-form/nested-form.component';
import { ItemsArrayComponent } from './components/items-array/items-array.component';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import {ProductsPageComponent} from "./pages/products-page/products-page.component";
import { ProductItemComponent } from './components/product-item/product-item.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    { path : 'products/:type', component: ProductsPageComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    FilterListComponent,
    FilterItemComponent,
    ObjectKeyPipe,
    FilterDetailComponent,
    FilterDecriptionComponent,
    OutsideClickDirective,
    AdminkaComponent,
    ItemControllComponent,
    NestedFormComponent,
    ItemsArrayComponent,
      ProductsPageComponent,
      ProductItemComponent

  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      ClickOutsideModule,
      ReactiveFormsModule,
      AsyncLocalStorageModule,
      RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
