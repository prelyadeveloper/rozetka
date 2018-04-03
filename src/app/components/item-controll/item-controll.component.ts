import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-item-controll',
    template:
            `
        <div class="form-group row" [formGroup]="item">
            <div class="col-lg-12">
                <label [attr.for]="'name'+index">Filter Type Name</label>
                <input type="text" class="form-control" [attr.id]="'name'+index" formControlName="name">
            </div>
            <div class="col-lg-12">
                <label [attr.for]="'name'+index">Filter key</label>
                <input type="text" class="form-control" [attr.id]="'name'+index" formControlName="key">
            </div>
            <div class="col-lg-12">
                <label [attr.for]="'quantity'+index">Description</label>
                <textarea  class="form-control" [attr.id]="'quantity'+index"  formControlName="description"></textarea>
            </div>
            <div class="col-sm-1 py-1">
                <button type="button" class="btn" (click)="removed.emit(index)">-</button>
            </div>
        </div>
    `,
  styleUrls: ['./item-controll.component.scss']
})
export class ItemControllComponent  {

    @Input()
    public index: number;

    @Input()
    public item: FormGroup;

    @Output()
    public removed: EventEmitter<number> = new EventEmitter<number>();

    static buildItem(val: string) {
        return new FormGroup({
            name: new FormControl(val, Validators.required),
            description: new FormControl(''),
            key: new FormControl('')
        })
    }

}
