import {NO_ERRORS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TranslateModule} from '@ngx-translate/core';
import {HttpClientModule} from '@angular/common/http';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from '../../../store/reducers';
import {effects} from '../../../store/effects';

import {HeaderComponent} from './header.component';
import {AppTranslate} from '../../../app.translate';
import {AuthService} from '../../services';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        TranslateModule,
        RouterTestingModule,
        CommonModule,

        StoreModule.forRoot(reducers),
        EffectsModule.forRoot(effects),

        AppTranslate
      ],
      declarations: [
        HeaderComponent
      ],
      providers: [
        AuthService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
