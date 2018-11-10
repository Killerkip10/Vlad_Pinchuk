import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {UserDropdownListComponent} from './user-dropdown-list.component';
import {reducers} from '../../../store/reducers';
import {effects} from '../../../store/effects';
import {CoreModule} from '../../../core/core.module';
import {AppTranslate} from '../../../app.translate';
import {User} from '../../../models';

describe('UserDropDownListComponent', () => {
  let component: UserDropdownListComponent;
  let fixture: ComponentFixture<UserDropdownListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        TranslateModule,

        StoreModule.forRoot(reducers),
        EffectsModule.forRoot(effects),
        AppTranslate
      ],
      declarations: [
        UserDropdownListComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDropdownListComponent);
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
    component.users = [] as User[];
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('snapshot', () => {
    component.users = [
      {
        name: 'Pasha',
        login: 'pasha',
        age: '25',
        dateOfBirth: '2018-11-10T18:52:23.023Z',
        dateOfFirstLogin: '2018-11-10T18:52:23.023Z',
        dateOfNextNot: '2018-11-10T18:52:23.023Z',
        information: 'pahan'
      },
      {
        name: 'Vlad',
        login: '1234',
        age: '25',
        dateOfBirth: '2018-11-10T18:52:23.023Z',
        dateOfFirstLogin: '2018-11-10T18:52:23.023Z',
        dateOfNextNot: '2018-11-10T18:52:23.023Z',
        information: 'pahan'
      }
    ] as User[];
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
