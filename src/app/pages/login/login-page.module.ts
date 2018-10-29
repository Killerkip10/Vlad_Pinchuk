import {NgModule} from '@angular/core';

import {LoginPageComponent} from './pages/login-page.component';
import {LoginPageRouting} from './login-page.routing';
import {LoginFormModule} from '../../components';

@NgModule({
  imports: [
    LoginFormModule,

    LoginPageRouting
  ],
  declarations: [
    LoginPageComponent
  ],
  exports: [
    LoginPageComponent
  ]
})
export class LoginPageModule {}
