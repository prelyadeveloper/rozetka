import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDecriptionComponent } from './filter-decription.component';

describe('FilterDecriptionComponent', () => {
  let component: FilterDecriptionComponent;
  let fixture: ComponentFixture<FilterDecriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterDecriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterDecriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
