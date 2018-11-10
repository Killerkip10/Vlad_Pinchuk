import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

import {SearchUsersPageComponent} from './search-users-page.component';
import {AppTranslate} from '../../app.translate';

describe('SearchUsersPageComponent', () => {
  let component: SearchUsersPageComponent;
  let fixture: ComponentFixture<SearchUsersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        HttpClientModule,
        TranslateModule,

        AppTranslate
      ],
      declarations: [
        SearchUsersPageComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUsersPageComponent);
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
    component.tabs = ['TAB1', 'TAB2', 'TAB3', 'TAB4'];
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('snapshot', () => {
    component.tabIndex = 0;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('snapshot', () => {
    component.tabIndex = 1;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
