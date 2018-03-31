import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminkaComponent } from './adminka.component';

describe('AdminkaComponent', () => {
  let component: AdminkaComponent;
  let fixture: ComponentFixture<AdminkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
