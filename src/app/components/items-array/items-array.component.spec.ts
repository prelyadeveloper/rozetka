import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsArrayComponent } from './items-array.component';

describe('ItemsArrayComponent', () => {
  let component: ItemsArrayComponent;
  let fixture: ComponentFixture<ItemsArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
