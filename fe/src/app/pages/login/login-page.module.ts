import {NgModule} from '@angular/core';

import {LoginPageComponent} from './pages/login-page.component';
import {LoginPageRouting} from './login-page.routing';
import {LoginFormModule} from '../../components';
import {AuthService} from '../../services';

@NgModule({
  imports: [
    LoginFormModule,

    LoginPageRouting
  ],
  declarations: [
    LoginPageComponent
  ],
  providers: [
    AuthService
  ],
  exports: [
    LoginPageComponent
  ]
})
export class LoginPageModule{}
