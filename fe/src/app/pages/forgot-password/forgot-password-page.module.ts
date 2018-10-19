import {NgModule} from "@angular/core";

import {ForgotPasswordPageComponent} from './pages/forgot-password-page.component';
import {ForgotPasswordPageRouting} from './forgot-password-page.routing';

@NgModule({
  imports: [
    ForgotPasswordPageRouting
  ],
  declarations: [
    ForgotPasswordPageComponent
  ],
  providers: [

  ],
  exports: [
    ForgotPasswordPageComponent
  ]
})
export class ForgotPasswordPageModule{}
