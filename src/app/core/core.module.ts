import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TranslateModule} from '@ngx-translate/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthGuard} from './guards';
import {
  MatButtonModule,
  MatToolbarModule,
  MatSelectModule,
  MatIconModule
} from '@angular/material';
import {
  AuthService,
  ProfileService,
  SearchUserService
} from './services';
import {
  HeaderComponent,
  FooterComponent
} from './components';
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule,
    BrowserAnimationsModule,

    RouterModule,

    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    AuthService,
    ProfileService,
    SearchUserService,

    AuthGuard
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule {}
