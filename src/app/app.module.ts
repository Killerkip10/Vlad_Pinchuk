import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {CoreModule} from './core/core.module';
import {AppRouting} from './app.routing';
import {AppComponent} from './app.component';
import {AppTranslate} from './app.translate';
import {
  LoginPageModule,
  UserProfileModule,
  ForgotPasswordPageModule
} from './pages';

@NgModule({
  imports: [
    CoreModule,
    RouterModule,
    AppTranslate,

    LoginPageModule,
    UserProfileModule,
    ForgotPasswordPageModule,

    AppRouting
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
