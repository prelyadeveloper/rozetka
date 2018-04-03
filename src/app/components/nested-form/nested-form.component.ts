import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import {ItemControllComponent} from "../item-controll/item-controll.component";
import {ItemsArrayComponent} from "../items-array/items-array.component";
import {FiltersService} from "../../services/filters.service";

@Component({
  selector: 'app-nested-form',
    template: `
        <div class="container">
            <div class="col-lg-6 col-lg-offset-3">
        <form [formGroup]="myForm" (ngSubmit)="submit()">
            <h4>Form</h4>
            <hr>
            <select formControlName="cat_id">
                <option value="">Select</option>
                <option  *ngFor="let cat of productTypes" [value]="cat.id">{{cat.type_name}}</option>
            </select>
            <app-items-array
                    formArrayName="filters"
                    [itemsFormArray]="myForm.get('filters')">
            </app-items-array>
            <hr>
            <div class="form-group">
                <input type="submit" class="form-control" value="Submit" [disabled]="myForm?.invalid">
            </div>
        </form>

        <h6 class="mt-3">FormGroup Model (<code>myForm.value</code>)</h6>
        <div><pre><code>{{ myForm?.value | json }}</code></pre></div>
        </div>
        </div>
    `,
  styleUrls: ['./nested-form.component.scss'],
    providers: [FiltersService]
})
export class NestedFormComponent implements OnInit {

    myForm: FormGroup;
    productTypes;

    constructor(
        private fb: FormBuilder,
        private flServ: FiltersService
    ) {


        this.flServ.getProductTypes().subscribe(value => {
            this.productTypes = value;
            console.log(value);
        })
    }

    ngOnInit() {



        // build the form model
        this.myForm = this.fb.group({
            cat_id: new FormControl('', Validators.required),
            filters: ItemsArrayComponent.buildItems()
        })
    }

    submit() {

        this.flServ.addFilters(JSON.stringify(this.myForm.value)).subscribe(value => {
            this.myForm.reset();
        });
    }

}
