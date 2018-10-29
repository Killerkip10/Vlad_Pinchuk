import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserListRouting} from './user-list.routing';
import {UserListComponent} from './user-list.component';
import {
  MatCardModule,
  MatIconModule
} from '@angular/material';
import {
  UserChoosenComponent,
  UserDropdownListComponent,
  UserDropdownItemComponent
} from './components';

@NgModule({
  imports: [
    CommonModule,

    MatCardModule,
    MatIconModule,

    UserListRouting
  ],
  declarations: [
    UserListComponent,
    UserChoosenComponent,
    UserDropdownListComponent,
    UserDropdownItemComponent
  ]
})
export class UserListPageModule { }
