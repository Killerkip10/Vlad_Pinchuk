import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TranslateModule} from '@ngx-translate/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthService} from './services';
import {AuthGuard} from './guards';
import {
  MatButtonModule,
  MatToolbarModule,
  MatSelectModule
} from '@angular/material';
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

    CommonModule,
    RouterModule,

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
    AuthGuard
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule {}
