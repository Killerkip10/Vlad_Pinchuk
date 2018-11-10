import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {UserFormComponent} from './user-form.component';
import {HttpValidatorService} from './validators';
import {AppTranslate} from '../app.translate';
import {User} from '../../../server/models';
import {Options} from './user-form.component';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;
  const user: User = {
    id: '23456789',
    login: '1234',
    password: '4321',
    name: 'Vlad',
    age: '19',
    role: '1',
    dateOfNextNot: '2018-11-10T18:52:23.023Z',
    dateOfFirstLogin: '2018-11-10T18:52:23.023Z',
    dateOfBirth: '2018-11-10T18:52:23.023Z',
    information: 'may the force be with you'
  };
  const options: Options = {
    nameForm: 'MAIN',
    send: 'SEND',
    reset: true,
    login: false,
    dateOfFirstLogin: false
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        TranslateModule,
        ReactiveFormsModule,
        HttpClientModule,

        AppTranslate
      ],
      declarations: [
        UserFormComponent
      ],
      providers: [
        HttpValidatorService
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
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
    component.user = user;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('snapshot', () => {
    component.user = user;
    component.options = options;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('snapshot', () => {
    const error = {message: 'TEST-ERROR'};

    component.userForm.controls.login.errors.login = error;
    component.userForm.controls.password.errors.password = error;
    component.userForm.controls.name.errors.name = error;
    component.userForm.controls.age.errors.age = error;
    component.userForm.controls.dateOfBirth.errors.date = error;
    component.userForm.controls.dateOfFirstLogin.errors.date = error;
    component.userForm.controls.dateOfNextNot.errors.date = error;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
