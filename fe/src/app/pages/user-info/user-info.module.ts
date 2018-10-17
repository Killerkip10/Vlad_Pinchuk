import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UserInfoComponent} from './pages/user-info.component';
import {UserInfoRouting} from './user-info.routing';
import {
  UserFormModule,
  UserInfoCardModule,
} from '../../components';

@NgModule({
  imports: [
    CommonModule,

    UserFormModule,
    UserInfoCardModule,

    UserInfoRouting,
  ],
  declarations: [
    UserInfoComponent
  ],
  exports:[
    UserInfoComponent
  ]
})
export class UserInfoModule { }
