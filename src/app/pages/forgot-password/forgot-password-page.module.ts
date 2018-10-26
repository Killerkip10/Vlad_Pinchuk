import {NgModule} from '@angular/core';

import {ForgotPasswordPageComponent} from './pages/forgot-password-page.component';
import {ForgotPasswordPageRouting} from './forgot-password-page.routing';
import {ForgotPasswordFormModule} from '../../components';

@NgModule({
  imports: [
    ForgotPasswordFormModule,

    ForgotPasswordPageRouting
  ],
  declarations: [
    ForgotPasswordPageComponent
  ],
  exports: [
    ForgotPasswordPageComponent
  ]
})
export class ForgotPasswordPageModule {}
