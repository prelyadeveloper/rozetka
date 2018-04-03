import { Component, OnInit, Input  } from '@angular/core';
import {ItemControllComponent} from "../item-controll/item-controll.component";
import {FormArray, } from "@angular/forms";
import {NestedFormComponent} from "../nested-form/nested-form.component";
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-items-array',
    template:
          `
        <fieldset>
            <h6>Items</h6>
            <div *ngIf="itemsFormArray.hasError('minSum')">
                You must buy a total sum of at least {{ itemsFormArray.getError('minSum') }}.
            </div>
            <app-item-controll
                    *ngFor="let item of itemsFormArray.controls; let i=index"
                    [index]="i" [item]="item" (removed)="itemsFormArray.removeAt($event)">
            </app-item-controll>
        </fieldset>
        <button type="button" class="btn btn-link" (click)="addItem()">Add another item</button>
    `,
  styleUrls: ['./items-array.component.scss']
})
export class ItemsArrayComponent {

    static buildItems() {
        return new FormArray([
            ItemControllComponent.buildItem('')])
    }

    @Input()
    public itemsFormArray: FormArray;

    addItem() {
        this.itemsFormArray.push(ItemControllComponent.buildItem(''))
    }


}

