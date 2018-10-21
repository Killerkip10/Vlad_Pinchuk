import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UserProfileComponent} from './pages/user-profile-page.component';
import {UserProfileRouting} from './user-profile-page.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatTabsModule,
  MatSnackBarModule
} from '@angular/material';

import {
  UserEditFormModule,
  UserInfoModule,
} from '../../components';

@NgModule({
  imports: [
    CommonModule,

    UserEditFormModule,
    UserInfoModule,

    MatTabsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,

    UserProfileRouting,
  ],
  declarations: [
    UserProfileComponent
  ],
  exports:[
    UserProfileComponent
  ]
})
export class UserProfileModule { }
