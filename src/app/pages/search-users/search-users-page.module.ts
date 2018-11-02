import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

import {SearchUsersPageComponent} from './search-users-page.component';
import {SearchUsersPageRouting} from './search-users-page.routing';
import {UserListModule} from '../../user-list/user-list.module';
import {ItemListModule} from '../../item-list/item-list.module';
import {MatTabsModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,

    UserListModule,
    ItemListModule,

    MatTabsModule,

    SearchUsersPageRouting
  ],
  declarations: [
    SearchUsersPageComponent
  ]
})
export class SearchUsersPageModule {}
