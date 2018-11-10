import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {of} from 'rxjs';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from '../store/reducers';
import {effects} from '../store/effects';
import {State} from '../store/reducers/users';

import {CoreModule} from '../core/core.module';
import {AppTranslate} from '../app.translate';
import {UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

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
        UserListComponent
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
    expect(fixture).toMatchSnapshot();
  });

  it('snapshot', () => {
    component.dropDownListFlag = true;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('snapshot', () => {
    component.dropDownListFlag = true;
    component.users$ = of({loaded: true} as State);
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('snapshot', () => {
    component.users$ = of({loaded: true} as State);
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('snapshot', () => {
    component.users$ = of({loaded: false} as State);
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
