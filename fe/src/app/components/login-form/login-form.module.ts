import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

import {LoginFormComponent} from './login-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    TranslateModule,
    FormsModule,

    MatFormFieldModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  declarations: [
    LoginFormComponent
  ],
  exports: [
    LoginFormComponent
  ]
})
export class LoginFormModule{}
