import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {AppRouting} from './app.routing';
import {AppComponent} from './app.component';
import {AuthGuard} from './guards/index';
import {AppTranslate} from './app.translate';
import {
  HeaderModule,
  FooterModule
} from './components/index';
import {
  LoginPageModule,
  UserProfileModule,
  ForgotPasswordPageModule
} from './pages/index';
import {
  RestApiService,
  UserService
} from './services/index';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppTranslate,

    HeaderModule,
    FooterModule,

    LoginPageModule,
    UserProfileModule,
    ForgotPasswordPageModule,

    AppRouting //last!!!
  ],
  declarations: [

    AppComponent
  ],
  providers: [
    RestApiService,
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
