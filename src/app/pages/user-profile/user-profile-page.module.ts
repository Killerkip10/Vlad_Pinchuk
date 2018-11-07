import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

import {UserProfilePageComponent} from './user-profile-page.component';
import {UserProfileRouting} from './user-profile-page.routing';
import {UserListModule} from '../../user-list/user-list.module';
import {UserFormModule} from '../../user-form/user-form.module';
import {UserInfoComponent} from './components';
import {
  MatTabsModule,
  MatCardModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,

    UserListModule,
    UserFormModule,

    MatTabsModule,
    MatCardModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,

    UserProfileRouting,
  ],
  declarations: [
    UserInfoComponent,

    UserProfilePageComponent,
  ]
})
export class UserProfilePageModule { }
