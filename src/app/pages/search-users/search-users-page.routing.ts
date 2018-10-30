import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SearchUsersPageComponent} from './search-users-page.component';

const routes: Routes = [
  {
    path: 'search-users',
    component: SearchUsersPageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class SearchUsersPageRouting {}
