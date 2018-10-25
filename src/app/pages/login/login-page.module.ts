import {NgModule} from '@angular/core';

import {LoginPageComponent} from './pages/login-page.component';
import {LoginPageRouting} from './login-page.routing';
import {LoginFormModule} from '../../components/index';
import {AuthService} from '../../services/index';

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
