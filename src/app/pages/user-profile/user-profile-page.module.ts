import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

import {UserProfileComponent} from './pages/user-profile-page.component';
import {UserProfileRouting} from './user-profile-page.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatTabsModule,
  MatSnackBarModule,
  MatProgressSpinnerModule
} from '@angular/material';

import {
  UserEditFormModule,
  UserInfoModule,
} from '../../components/index';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,

    UserEditFormModule,
    UserInfoModule,

    MatTabsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
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
