import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {effects} from './store/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {CoreModule} from './core/core.module';
import {AppRouting} from './app.routing';
import {AppComponent} from './app.component';
import {AppTranslate} from './app.translate';
import {
  MatSidenavModule,
  MatListModule
} from '@angular/material';
import {
  LoginPageModule,
  UserProfilePageModule,
  ForgotPasswordPageModule,
  SearchUsersPageModule
} from './pages';

@NgModule({
  imports: [
    CoreModule,
    CommonModule,
    RouterModule,
    TranslateModule,

    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({maxAge: 10}),

    LoginPageModule,
    UserProfilePageModule,
    ForgotPasswordPageModule,
    SearchUsersPageModule,

    MatSidenavModule,
    MatListModule,

    AppTranslate,
    AppRouting
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
