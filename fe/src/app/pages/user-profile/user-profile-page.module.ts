import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UserProfileComponent} from './pages/user-profile-page.component';
import {UserProfileRouting} from './user-profile-page.routing';
import {
  UserFormModule,
  UserInfoCardModule,
} from '../../components';

@NgModule({
  imports: [
    CommonModule,

    UserFormModule,
    UserInfoCardModule,

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
