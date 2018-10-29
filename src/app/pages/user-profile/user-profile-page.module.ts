import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

import {UserProfileComponent} from './user-profile-page.component';
import {UserProfileRouting} from './user-profile-page.routing';
import {
  MatTabsModule,
  MatSnackBarModule,
  MatProgressSpinnerModule
} from '@angular/material';
import {
  UserEditFormModule,
  UserInfoModule,
} from '../../components';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,

    UserEditFormModule,
    UserInfoModule,

    MatTabsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,

    UserProfileRouting,
  ],
  declarations: [
    UserProfileComponent
  ],
  exports: [
    UserProfileComponent
  ]
})
export class UserProfilePageModule { }
