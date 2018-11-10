import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {UserChosenComponent} from './user-chosen.component';
import {User} from '../../../models';

describe('UserChosenComponent', () => {
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

  it('snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('snapshot', () => {
    component.user = {} as User;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('snapshot', () => {
    component.user = {
      login: '1234',
      name: 'Pasha',
      dateOfBirth: '2018-11-10T18:52:23.023Z'
    } as User;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
