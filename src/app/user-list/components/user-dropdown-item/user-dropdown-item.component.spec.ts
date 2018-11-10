import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {UserDropdownItemComponent} from './user-dropdown-item.component';
import {User} from '../../../models';

describe('UserDropDownItemComponent', () => {
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
      name: 'Pasha',
      login: 'pasha',
      age: '25',
      dateOfBirth: '2018-11-10T18:52:23.023Z',
      dateOfFirstLogin: '2018-11-10T18:52:23.023Z',
      dateOfNextNot: '2018-11-10T18:52:23.023Z',
      information: 'pahan'
    } as User;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
