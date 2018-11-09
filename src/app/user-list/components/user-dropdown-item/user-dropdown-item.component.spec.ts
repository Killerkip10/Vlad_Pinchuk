import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import { UserDropdownItemComponent } from './user-dropdown-item.component';

describe('ItemComponent', () => {
  let component: UserDropdownItemComponent;
  let fixture: ComponentFixture<UserDropdownItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserDropdownItemComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDropdownItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
