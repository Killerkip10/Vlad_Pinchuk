import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserListComponent} from './user-list.component';
import {
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressSpinnerModule
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
    MatInputModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
  ],
  declarations: [
    UserListComponent,
    UserChoosenComponent,
    UserDropdownListComponent,
    UserDropdownItemComponent
  ],
  exports: [
    UserListComponent
  ]
})
export class UserListModule { }
