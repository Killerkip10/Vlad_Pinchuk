import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import { UserChosenComponent } from './user-chosen.component';

describe('ItemComponent', () => {
  let component: UserChosenComponent;
  let fixture: ComponentFixture<UserChosenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserChosenComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChosenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
