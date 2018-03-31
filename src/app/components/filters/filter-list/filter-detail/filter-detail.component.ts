import {Component, OnInit, Input,
     ElementRef} from '@angular/core';
import {FiltersService} from "../../../../services/filters.service";
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
@Component({
  selector: 'app-filter-detail',
  templateUrl: './filter-detail.component.html',
  styleUrls: ['./filter-detail.component.scss'],
    animations: [
        trigger('showFilterDescr', [
            state('show', style({
                display: 'block'
            })),
            state('hidden', style({
              display: 'none'
            })),

        ]),
    ]
})
export class FilterDetailComponent implements OnInit {

  @Input() filter_id;
  filterDescr;
  show = 'hidden';
  constructor(private fldescr: FiltersService, private _elementRef: ElementRef) { }

  ngOnInit() {
  }


  custom(e){
    this.show = 'hidden';
  }

    showFilterDecr(id) {
    if (!this.filterDescr) {
        this.fldescr.getFilterDescr(id).subscribe(value => {
            this.filterDescr = value;
        });
    }
    this.show = this.show === 'hidden' ? 'show' : 'hidden';
    }

}
