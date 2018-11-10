import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {APP_BASE_HREF, CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {RouterTestingModule} from '@angular/router/testing';

import {ForgotPasswordFormComponent} from './forgot-password-form.component';
import {AppTranslate} from '../../../../app.translate';
import {CoreModule} from '../../../../core/core.module';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordFormComponent;
  let fixture: ComponentFixture<ForgotPasswordFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        CommonModule,
        TranslateModule,
        FormsModule,
        RouterTestingModule,

        AppTranslate
      ],
      declarations: [
        ForgotPasswordFormComponent
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
    fixture = TestBed.createComponent(ForgotPasswordFormComponent);
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
    component.errorMessage = 'ERROR-TEST';
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('snapshot', () => {
    component.password = 'PASSWORD';
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
