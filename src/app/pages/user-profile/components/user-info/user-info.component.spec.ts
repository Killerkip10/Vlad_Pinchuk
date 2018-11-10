import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {UserInfoComponent} from './user-info.component';
import {User} from '../../../../models';

describe('UserInfoComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserInfoComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoComponent);
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
    component.userInfo = {} as User;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('snapshot', () => {
    component.userInfo = {
      name: 'Vlad',
      login: '1234',
      information: 'i like angular',
      age: '24',
      dateOfNextNot: '2018-11-10T18:52:23.023Z',
      dateOfFirstLogin: '2018-11-10T18:52:23.023Z',
      dateOfBirth: '2018-11-10T18:52:23.023Z'
    } as User;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
