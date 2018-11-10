import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {effects} from './store/effects';

import { AppComponent } from './app.component';
import {AppTranslate} from './app.translate';
import {AppRouting} from './app.routing';
import {TokenService} from './core/services';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        CommonModule,
        RouterModule,
        TranslateModule,

        StoreModule.forRoot(reducers),
        EffectsModule.forRoot(effects),

        AppTranslate,
        AppRouting
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));

  it('snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('snapshot', () => {
    class Token extends TokenService {
      static getToken(): string | null {
        return 'token';
      }
    }

    component.tokenService = Token;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('snapshot', () => {
    class Token extends TokenService {
      static getToken(): string | null {
        return null;
      }
    }

    component.tokenService = Token;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
