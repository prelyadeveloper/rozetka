import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemControllComponent } from './item-controll.component';

describe('ItemControllComponent', () => {
  let component: ItemControllComponent;
  let fixture: ComponentFixture<ItemControllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemControllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemControllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
