import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
} from '@angular/material';

import {UserEditFormComponent} from './user-edit-form.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    UserEditFormComponent,
  ],
  exports: [
    UserEditFormComponent,
  ]
})
export class UserEditFormModule {}
