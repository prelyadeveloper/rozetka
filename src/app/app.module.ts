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
    AdminkaComponent

  ],
  imports: [
    BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
