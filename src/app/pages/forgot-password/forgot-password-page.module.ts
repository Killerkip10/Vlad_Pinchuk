import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

import {ForgotPasswordPageComponent} from './forgot-password-page.component';
import {ForgotPasswordPageRouting} from './forgot-password-page.routing';
import {ForgotPasswordFormComponent} from './components';
import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TranslateModule,

    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,

    ForgotPasswordPageRouting
  ],
  declarations: [
    ForgotPasswordFormComponent,

    ForgotPasswordPageComponent
  ]
})
export class ForgotPasswordPageModule {}
