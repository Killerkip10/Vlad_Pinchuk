import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {CoreModule} from './core/core.module';
import {AppRouting} from './app.routing';
import {AppComponent} from './app.component';
import {AppTranslate} from './app.translate';
import {SearchUserService} from './core/services';
import {
  MatSidenavModule,
  MatListModule
} from '@angular/material';
import {
  LoginPageModule,
  UserProfilePageModule,
  ForgotPasswordPageModule,
  UserListPageModule
} from './pages';

@NgModule({
  imports: [
    CoreModule,

    CommonModule,
    RouterModule,

    LoginPageModule,
    UserProfilePageModule,
    ForgotPasswordPageModule,
    UserListPageModule,

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
