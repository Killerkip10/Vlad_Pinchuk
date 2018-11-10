import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {TranslateModule} from '@ngx-translate/core';
import {of} from 'rxjs';

import {StoreModule} from '@ngrx/store';
import {reducers} from '../../store/reducers';
import {State} from '../../store/reducers/profile';
import {EffectsModule} from '@ngrx/effects';
import {effects} from '../../store/effects';

import {UserProfilePageComponent} from './user-profile-page.component';
import {AppTranslate} from '../../app.translate';
import {MatSnackBarModule} from '@angular/material';

describe('UserProfilePageComponent', () => {
  let component: UserProfilePageComponent;
  let fixture: ComponentFixture<UserProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        HttpClientModule,
        TranslateModule,
        MatSnackBarModule,

        StoreModule.forRoot(reducers),
        EffectsModule.forRoot(effects),

        AppTranslate,
      ],
      declarations: [
        UserProfilePageComponent,
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfilePageComponent);
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
    component.tabs = [];
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('snapshot', () => {
    component.tabs = ['TAB1', 'TAB2', 'TAB3', 'TAB4', 'TAB5'];
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('snapshot', () => {
    component.profile$ = of({loaded: true} as State);
    component.tabIndex = 0;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('snapshot', () => {
    component.profile$ = of({loaded: true} as State);
    component.tabIndex = 1;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('snapshot', () => {
    component.profile$ = of({loaded: true} as State);
    component.tabIndex = 2;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('snapshot', () => {
    component.profile$ = of({loaded: true} as State);
    component.tabIndex = 3;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
