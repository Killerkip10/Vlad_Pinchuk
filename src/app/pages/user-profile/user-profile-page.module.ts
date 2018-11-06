import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {ReactiveFormsModule} from '@angular/forms';

import {UserProfilePageComponent} from './user-profile-page.component';
import {UserProfileRouting} from './user-profile-page.routing';
import {UserListModule} from '../../user-list/user-list.module';
import {
  UserEditFormComponent,
  UserInfoComponent
} from './components';
import {
  MatTabsModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,

    UserListModule,

    MatTabsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,

    UserProfileRouting,
  ],
  declarations: [
    UserEditFormComponent,
    UserInfoComponent,

    UserProfilePageComponent,
  ]
})
export class UserProfilePageModule { }
