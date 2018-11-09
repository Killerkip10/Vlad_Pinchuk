import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import { APP_BASE_HREF } from '@angular/common'
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {effects} from './store/effects';
import {
  ForgotPasswordPageModule,
  LoginPageModule,
  SearchUsersPageModule,
  UserProfilePageModule
} from './pages';
import {AppTranslate} from './app.translate';
import {AppRouting} from './app.routing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
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
});
