import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ItemListComponent} from './item-list.component';
import {ItemService} from './services';
import {
  ItemComponent,
  SearchComponent,
  PathComponent
} from './components';
import {
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [
    ItemListComponent,
    ItemComponent,
    SearchComponent,
    PathComponent
  ],
  providers: [
    ItemService
  ],
  exports: [
    ItemListComponent
  ]
})
export class ItemListModule { }
