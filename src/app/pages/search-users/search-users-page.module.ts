import {NgModule} from '@angular/core';

import {SearchUsersPageComponent} from './search-users-page.component';
import {SearchUsersPageRouting} from './search-users-page.routing';
import {UserListModule} from '../../user-list/user-list.module';

@NgModule({
  imports: [
    UserListModule,

    SearchUsersPageRouting
  ],
  declarations: [
    SearchUsersPageComponent
  ]
})
export class SearchUsersPageModule {}
