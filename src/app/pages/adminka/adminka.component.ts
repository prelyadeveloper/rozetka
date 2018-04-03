import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, FormBuilder} from '@angular/forms';


@Component({
    selector: 'app-adminka',
    templateUrl: './adminka.component.html',


})
export class AdminkaComponent implements OnInit {
    ltsForm: FormGroup;

    get products() { return this.ltsForm.get('products'); }

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.ltsForm = this.formBuilder.group({
            products: this.formBuilder.array([
                new FormGroup({
                      alex:  new FormControl()
                }
                )
            ])
        });
    }

    addProduct() {
        (this.products as FormArray).push(this.formBuilder.control(''));
    }


}