import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {UserListComponent } from './user-list.component';
import {
  UserChosenComponent,
  UserDropdownItemComponent,
  UserDropdownListComponent
} from './components';
import {CoreModule} from '../core/core.module';
import {TranslateModule} from '@ngx-translate/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AppTranslate} from '../app.translate';
import {reducers} from '../store/reducers';
import {effects} from '../store/effects';
import {of} from 'rxjs';
import {State} from '../store/reducers/users';
import {CommonModule} from '@angular/common';

describe('ItemComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  const users = [
    {
      name: 'Vlad',
      login: '1234567890',
      age: '20',
      dateOfBirth: '2018-11-09T20:11:55.543Z',
      dateOfFirstLogin: '2018-11-09T20:11:55.543Z',
      dateOfNextNot: '2018-11-09T20:11:55.543Z',
      information: 'i like angular'
    },
    {
      name: 'Pasha',
      login: '0000000000000',
      age: '65',
      dateOfBirth: '2018-11-09T20:28:11.133Z',
      dateOfFirstLogin: '2018-11-09T20:28:11.133Z',
      dateOfNextNot: '2018-11-09T20:28:11.133Z',
      information: 'I AM PROGRAMMER, may be'
    },
    {
      name: 'Iran',
      login: 'iranium',
      age: '100',
      dateOfBirth: '2018-11-09',
      dateOfFirstLogin: '2018-11-09',
      dateOfNextNot: '2018-11-09',
      information: 'minecraft is my life!!!'
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        CommonModule,
        TranslateModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot(effects),
        AppTranslate
      ],
      declarations: [
        UserListComponent,
        UserChosenComponent,
        UserDropdownItemComponent,
        UserDropdownListComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('snapshot', () => {
    component.users$ = of({
      users: [],
      selected: {},
      loaded: false,
      err: ''
    } as State);
    component.dropDownListFlag = false;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('snapshot', () => {
    component.users$ = of({
      users: [],
      selected: {},
      loaded: false,
      err: ''
    } as State);
    component.dropDownListFlag = true;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('snapshot', () => {
    component.users$ = of({
      users: users,
      selected: {},
      loaded: true,
      err: ''
    } as State);
    component.dropDownListFlag = true;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('snapshot', () => {
    component.users$ = of({
      users: users,
      selected: users[1],
      loaded: true,
      err: ''
    } as State);
    component.dropDownListFlag = true;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('snapshot', () => {
    component.users$ = of({
      users: users,
      selected: users[1],
      loaded: true,
      err: ''
    } as State);
    component.dropDownListFlag = false;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
