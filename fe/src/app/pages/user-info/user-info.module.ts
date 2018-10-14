import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UserInfoComponent} from './pages/user-info.component';
import {UserFormModule} from '../../components';
import {UserInfoRouting} from './user-info.routing';

@NgModule({
  imports: [
    CommonModule,

    UserFormModule,
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
