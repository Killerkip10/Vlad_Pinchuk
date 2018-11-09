import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import { UserDropdownListComponent } from './user-dropdown-list.component';
import {TranslateModule} from '@ngx-translate/core';
import {StoreModule} from '@ngrx/store';
import {reducers} from '../../../store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {effects} from '../../../store/effects';
import {CoreModule} from '../../../core/core.module';
import {AppTranslate} from '../../../app.translate';

describe('ItemComponent', () => {
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
});
