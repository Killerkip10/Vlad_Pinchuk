import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

import {UserListComponent} from './user-list.component';
import {
  UserChosenComponent,
  UserDropdownListComponent,
  UserDropdownItemComponent
} from './components';
import {
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,

    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
  ],
  declarations: [
    UserListComponent,
    UserChosenComponent,
    UserDropdownListComponent,
    UserDropdownItemComponent
  ],
  exports: [
    UserListComponent
  ]
})
export class UserListModule { }
