import {NgModule} from '@angular/core';

import {ForgotPasswordFormComponent} from './forgot-password-form.component';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    FormsModule,
    TranslateModule,

    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  declarations: [
    ForgotPasswordFormComponent
  ],
  exports: [
    ForgotPasswordFormComponent
  ]
})
export class ForgotPasswordFormModule {}
